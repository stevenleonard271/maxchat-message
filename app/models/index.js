const dbConfig = require("../config/database")
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url: dbConfig.url, 
    message: require('./message.model.js')(mongoose),
    contact : require('./contact.model.js')(mongoose)
}