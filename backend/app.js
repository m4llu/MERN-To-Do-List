require('dotenv').config()
const createError = require("http-errors");
const express = require("express");
const indexRouter = require("./routes/index");
const userRoutes = require("./routes/users");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const { Kitten } = require("./mongo/schema")

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false}));
app.use("/", indexRouter);
app.use("/users", userRoutes);

mongoose.connect(
    "mongodb+srv://m4llu:9Z74r9Ijh3Fuim6Y@cluster0.lheofs0.mongodb.net/"
)

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

app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateKitten = await Kitten.findByIdAndUpdate(
            id,
            {name},
            { new: true }
        );
        res.json({ kitten: updateKitten});
    }   catch (error) {
        console.error("virhe kissan päivittämisessä", error);
    }
})

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;