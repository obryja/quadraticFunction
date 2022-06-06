const router = require('express').Router()

router.get("/", (req, res) => {
    res.render('index', {title: "Funkcja kwadratowa"})
})

router.get('/tasks', (req, res) => {
    res.render('tasks', {title: 'Zadania otwarte', abcd: false})
})

router.get('/tasks/abcd', (req, res) => {
    res.render('tasks', {title: 'Zadania zamknięte', abcd: true})
})

router.get('/task/:taskId', (req, res) => {
    res.render('task', {title: 'Zadanie', taskId: req.params.taskId})
})

module.exports = router