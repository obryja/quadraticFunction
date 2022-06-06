const { ObjectId } = require("bson")
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    num: Number,
    points: Number,
    when: String,
    content: String,
    answer: String,
    closed: Boolean,
}, {
    versionKey: false
})

const Task = new mongoose.model('Task', taskSchema)

module.exports = {
    Task,
}