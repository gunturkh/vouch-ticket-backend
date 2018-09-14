const Ticket = require('./model')

const controller ={
    get: async (req,res,next) => {
        Ticket.find().sort({_id: -1})
            .then(tickets => {
                res.status(200).send(tickets)
            })
            .catch(error => 
                res.status(400).send({
                    message: error
                })
            )
    },

    findById: async (req,res,next) => {
        Ticket.findById({_id: req.body._id})
            .then(tickets => {
                if (tickets.length > 0)
                    {res.status(200).send(tickets)}
                else 
                {
                return res.status(200).send({message : "ID Not Found"})
                }
            })
            .catch(error => 
                res.status(400).send({
                    message: "ID Not Found"
                })
            )
    },

    findByStatus: async (req,res,next) => {
        Ticket.find({ status: req.body.status})
        .then(tickets => {
            if (tickets.length > 0 )
            {res.status(200).send(tickets)}
            else 
            {
                return res.status(200).send({message : "Status Not Found"})
            }
        })
        .catch(error => 
            res.status(400).send({
                message: error
            })
        )

    },

    add: async (req, res, next) => {
        const newTicket = {
            name : req.body.name,
            status: req.body.status,
            log: req.body.log
        }

        const ticket = await Ticket.create(newTicket)

        res.status(201).send({
            ticket
        })
    },

    deleteById: async (req, res, next) => {
        
        Ticket.findByIdAndDelete({ _id: req.body._id })
        .then(ticket =>{ 
            res.status(200).send({
                message: `Delete Ticket by ID Success`
            }
            )
        })
        .catch(error => {
            res.status(400).send({
                message: "Delete Ticket by ID Failed"
            })
        })
    },

    updateById: async (req,res,next) => {

        const update = {
            name : req.body.name,
            status : req.body.status,
            log: req.body.log
        }
        Ticket.findByIdAndUpdate({_id: req.body._id}, update)
            .then(ticket =>{ 
                res.status(200).send({
                    message: ticket
                }
                )
            })
            .catch(error => {
                res.status(400).send({
                    message: "Update Ticket by ID Failed"
                })
            })
    }


}

module.exports = controller