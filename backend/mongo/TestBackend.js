const mongoose = require("mongoose");
const { Task } = require("./schema");

async function getAllTasks() {
    try {
        const allTasks = await Task.find();
        
        return allTasks.map((task) => ({
            id: task._id.toHexString(),
            title: task.title,
            color: task.color,
            description: task.description,
        }));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

async function saveData(task) {
    console.log("Task to save:", JSON.stringify(task));
    const timestamp = new Date().getTime();
    const savedTask = await Task.create({
        title: task.title,
        color: task.color,
        description: task.description,
    });

    console.log(savedTask);
    const taskId = savedTask._id.toHexString();
    return {
        id: taskId,
        title: task.title,
        color: task.color,
        description: task.description,
        time: timestamp,
    };
}

async function deleteData(id) {
    try {
        const result = await Task.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            throw new Error("No task was deleted");
        }

        console.log("Deleted task: ", result);
    } catch (error) {
        console.error("Failed to delete task: ", error);
        throw error;
    }
}

async function editData(id, newData) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            newData,
            { new: true } // Return the updated task
        );

        if (!updatedTask) {
            throw new Error("Task not found");
        }

        console.log("Updated task:", updatedTask);
        return {
            id: updatedTask._id.toHexString(),
            title: updatedTask.title,
            color: updatedTask.color,
            description: updatedTask.description,
        };
    } catch (error) {
        console.error("Error editing task:", error);
        throw error;
    }
}

module.exports = {
    getAllTasks,
    saveData,
    deleteData,
    editData
};