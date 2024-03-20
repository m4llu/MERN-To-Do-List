const express = require("express");
const router = express.Router();
const backend = require("../mongo/TestBackend");

console.log("Backend object:", backend); // Check the backend object

/* POST route for creating a new task at the root endpoint */
router.post("/", async function (req, res, next) {
    try {
        const { title, color, description } = req.body;
        const data = { title, color, description };

        console.log("Data received:", data); // Log the data received

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
    const data = await backend.getAllTasks();
    console.log("All tasks:", data);
    res.json(data); // Return the data directly without wrapping it in an object
});

/* DELETE route to delete a task by ID from the root endpoint */
router.delete("/:id", async function (req, res, next) {
    try {
        const dataId = req.params.id;
        console.log("Deleting task with ID:", dataId); // Log the ID being deleted
        await backend.deleteData(dataId);
        res.json({ status: "ok" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "ERROR 500" });
    }
});

module.exports = router;