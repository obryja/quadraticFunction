const router = require('express').Router()
const taskServices = require('../services/taskServices')

router.post('/get_all_tasks', taskServices.getAllTasks)

router.post('/get_task', taskServices.getTask)

module.exports = router