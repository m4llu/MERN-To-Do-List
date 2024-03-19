const mongoose = require("mongoose");
const { Task } = require("./schema"); // Import the Task model

async function getAllTasks(params) {
    try {
        const allTasks = await Task.find();
        
        return allTasks.map((task) => {
            return {
                id: task._id.toHexString(),
                title: task.title,
                color: task.color,
                description: task.description,
            };
        });
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error fetching tasks:', error);
        // You can choose to throw the error or return a specific value
        throw error;
    }
}

async function saveTask(task) {
    console.log("Task to save:", JSON.stringify(data));
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
        title: data.title,
        color: data.color,
        description: data.description,
        time: timestamp,
    };
}

async function deleteTask(id) {
    try {
        const result = await Task.deleteOne({ _id: mongoose.Types.ObjectId(id) });
        if (result && result.deletedCount === 0) {
            throw new Error("No task was deleted");
        }

        console.log("Deleted task: ", result);
    } catch (error) {
        console.error("Failed to delete task: ", error);
        throw error;
    }
}

module.exports = {
    getAllTasks,
    saveTask,
    deleteTask,
};