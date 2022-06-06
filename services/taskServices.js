const Task = require('../db/schemas').Task

getAllTasks = async (req, res) => {
    try{
        res.status(202).send(JSON.stringify(
            await Task.find({closed: req.body.closed}).lean()
        ))
    } catch(err){
        res.sendStatus(500)
        console.log(err)
    }
}

getTask = async (req, res) => {
    try {
        if(!req.body.id)  return res.sendStatus(400)

        res.status(202).send(JSON.stringify(
            await Task.findById(req.body.id).lean()
        ))
    } catch(err) {
        res.sendStatus(500)
        console.log(err) 
    }
}

module.exports = {
    getAllTasks,
    getTask,
}