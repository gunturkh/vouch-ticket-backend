const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
const db = process.env.MONGO_DATABASE
const host = process.env.MONGO_HOST
const port = process.env.MONGO_PORT
mongoose.connect(`mongodb://${user}:${pass}@${host}:${port}/${db}`)
// Define your schema as normal.
const ticketSchema = mongoose.Schema({
    name: { type: String, required: true, unique: false },
    status: { type: String, required: true },
    log: { type: String, required: true }
});

ticketSchema.plugin(uniqueValidator)

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket