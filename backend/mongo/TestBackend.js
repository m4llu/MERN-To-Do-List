const { Task } = require("./schema");

async function getAllTasks() {
    try {
        const allTasks = await Task.find();
        return allTasks.map((task) => ({
            id: task._id.toHexString(),
            title: task.title,
            color: task.color,
            description: task.description,
            date: task.date
        }));
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}

async function saveData(task) {
    console.log("Task to save:", JSON.stringify(task));
    const savedTask = await Task.create({
        title: task.title,
        color: task.color,
        description: task.description,
        date: task.date
    });
    return savedTask;
}

async function deleteData(id) {
    try {
        await Task.deleteOne({ _id: id });
        console.log("Deleted task with ID:", id);
    } catch (error) {
        console.error("Failed to delete task:", error);
        throw error;
    }
}

async function editData(id, newData) {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            newData,
            { new: true }
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