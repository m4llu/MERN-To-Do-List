require('dotenv').config();
const express = require("express");
const indexRouter = require("./routes/index");
const userRoutes = require("./routes/users");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors()); // Apply cors middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

// Apply cors middleware with specific configuration
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

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

const port = 3001;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});