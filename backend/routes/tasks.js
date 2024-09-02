const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Add a new task
router.post('/tasks', async (req,res) => {
    try{
    const task =new Task (req.body);
    await task.save();
    res.json(task);

    } catch (err) {
        res.json(err);
    } 
});

// All task

router.get('/tasks', async(req,res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.json(err);
    }
});

// update a task
router.put('tasks/:id', async(req,res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(task);
    } catch (err) {
        res.json(err);
    }
});

// Delete a task

router.delete('/tasks/:id', async (req,res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.json(task);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;