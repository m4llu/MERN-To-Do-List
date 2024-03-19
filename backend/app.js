require('dotenv').config();
const createError = require("http-errors");
const express = require("express");
const indexRouter = require("./routes/index");
const userRoutes = require("./routes/users");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { Task } = require("./mongo/schema");

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URL);

mongoose.connection
    .once("open", function () {
        console.log("Connected");
    })
    .on("error", function (error) {
        console.log("CONNECTION ERROR:", error);
    });

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.send("error");
});

// Route to update a task by ID
app.put("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        res.json({ task: updatedTask });
    } catch (error) {
        console.error("Error updating task", error);
        res.status(500).json({ error: "An error occurred while updating the task" });
    }
});

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;