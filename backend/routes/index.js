const express = require("express");
const router = express.Router();
const backend = require("../mongo/TestBackend");

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

router.get("/", async function (req, res, next) {
    const data = await backend.getAllTasks();
    console.log("All tasks:", data);
    res.json(data); // Return the data directly without wrapping it in an object
});

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

router.put("/:id", async function (req, res, next) {
    try {
        const taskId = req.params.id;
        const { title, color, description } = req.body;
        const updatedTask = await backend.editData(taskId, { title, color, description });

        if (!updatedTask) {
            return res.status(404).json({ status: "error", message: "Task not found" });
        }

        console.log("Updated task:", updatedTask);
        res.json({ status: "ok", updatedTask });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "ERROR 500" });
    }
});

module.exports = router;