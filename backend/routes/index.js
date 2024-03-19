const express = require("express");
const router = express.Router();
const backend = require("../mongo/TestBackend");

/* POST route for creating a new task at the root endpoint */
router.post("/", async function (req, res, next) {
    try {
        const { title, color, description } = req.body;
        const data = { title, color, description };

        const savedData = await backend.saveData(data);
        console.log("Data saved:", savedData);
        res.json({ status: "ok", savedData });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "ERROR 500" });
    }
});

/* GET route for fetching all tasks from the root endpoint */
router.get("/", async function (req, res, next) {
    const data = await backend.getAllData();
    console.log(data);
    res.json({ data });
});

/* DELETE route to delete a task by ID from the root endpoint */
router.delete("/:id", async function (req, res, next) {
    try {
        const dataId = req.params.id;
        await backend.deleteData(dataId);
        res.json({ status: "ok" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "ERROR 500" });
    }
});

module.exports = router;