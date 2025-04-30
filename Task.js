 const express = require("express");
 const router = express.Router();
 const conn = require("../db");



   //1. Update Task 
    router.put("/profile/:taskId", (req, res) => {
    const { taskId } = req.params;
    const { name, status, duedate, priority } = req.body;
    const query = "UPDATE Task SET Name = ?, Status = ?, DueDate = ?, Priority = ? WHERE TaskID = ?";
    conn.query(query, [name, status, duedate, priority , taskId], (err) => {
    if (err) res.status(500).send(err.message);
    else res.json({ status: "success", message: "Task updated successfully." });
    });
   });


   //2. Delete a Task
    router.delete("/task/taskId", (req, res) => {
    const { taskId } = req.params;
    const query = "DELETE FROM Task WHERE TaskID = ?";
    conn.query(query, [taskId], (err) => {
    if (err) res.status(500).send(err.message);
    else res.json({ status: "success", message: "Task deleted successfully." });
    });
   });
   module.exports = router;