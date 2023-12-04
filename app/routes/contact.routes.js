module.exports = app => {
    const contact = require('../controllers/contact.controller')
    const r = require("express").Router();

    r.get('/',contact.findAll)
    r.get('/:id',)
    r.post('/', )
    r.put('/:id',contact.update )
    r.delete('/:id', )

    app.use('/contact',r)
}