const dbConfig = require("../config/database")
const mongoose = require("mongoose")

module.exports = {
    mongoose,
    url: dbConfig.url, 
    message: require('./message.model.js')(mongoose)
}