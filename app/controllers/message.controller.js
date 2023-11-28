const db = require("../models")

const Message = db.message


exports.create = async (req, res) => {
    try {
        const message = await Message.create(req.body)
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

exports.findAll = async (req, res) => {
    try {
        const message = await Message.find();
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.show = async (req, res) => {
    try {
        const { id } = req.params
        const message = await Message.findById(id);
        if (!message) {
            return res.status(400).json({
                message: `Cannot find any product with ID ${id}`
            })
        }
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const message = await Message.findByIdAndUpdate(id, req.body);

        if (!message) {
            return res.status(400).json({
                message: `Cannot find any message with ID ${id}`
            })
        }

        const updatedMessage = await Message.findById(id)
        res.status(200).json(updatedMessage)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        const message = await Message.findByIdAndDelete(id);
        if(!message){
            return res.status(404).json({
                message: `Cannot find any message with ID ${id}`
            })
        }
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

