module.exports = app => {
    const message = require('../controllers/message.controller')
    const r = require("express").Router();

    r.get('/', message.findAll)
    r.get('/:id',message.show)
    r.post('/', message.create)
    r.put('/:id', message.update)
    r.delete('/:id', message.delete)

    app.use('/message',r)
}