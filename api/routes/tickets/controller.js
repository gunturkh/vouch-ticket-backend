const Ticket = require('./model')

const controller ={
    get: async (req,res,next) => {
        
        
        Ticket.find().sort({_id: -1})
        .then(tickets => {
            // res.status(200).send(tickets)
            res.render('lists', { title: tickets })
            })
            .catch(error => 
                res.status(400).send({
                    message: error
                })
            )
    },

    findById: async (req,res,next) => {
        Ticket.findById(req.params.id)
            .then(tickets => {
                // res.status(200).send(tickets)
                res.render('updateTicket', { title: tickets.name, id: tickets._id, name: tickets.name  })
            })
            .catch(error => 
                res.status(400).send({
                    message: `ID ${req.body.id} Not Found`
                })
            )
    },

    findByStatus: async (req,res,next) => {
        Ticket.find({ status: req.params.id}).sort({_id: -1})
        .then(tickets => {
            res.render('lists', { title: tickets })
            // res.status(200).send(tickets)
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
            status: "open",
            log: req.body.log
        }

        console.log(req.body);
        

        const ticket = await Ticket.create(newTicket)
        res.redirect('/tickets')
        // res.status(201).send({
        //     ticket
        // })
    },

    deleteById: async (req, res, next) => {
        
        Ticket.findByIdAndRemove(req.params.id)
        .then(ticket =>{ 
            res.redirect('/tickets')
        })
        .catch(error => {
            res.status(400).send({
                message: error
            })
        })
    },

    updateById: async (req,res,next) => {

        const update = {
            name : req.body.name,
            status : req.body.status,
            log: req.body.log
        }
        Ticket.findByIdAndUpdate(req.params.id, update)
            .then(ticket =>{ 
                res.redirect('/tickets')
            })
            .catch(error => {
                res.status(400).send({
                    message: "Update Ticket by ID Failed"
                })
            })
    }


}

module.exports = controller