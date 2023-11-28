const db = require("../models")

const Message = db.message

//POST : Insert Message 
exports.create = async (req, res) => {
    try {
        await Message.create(req.body)
        res.status(200).json({
            message: "Successfully insert message"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}

//GET: Get all messages (filter: with query status and type)
exports.findAll = async (req, res) => {
    try {
        const { status, type } = req.query;
        let query = {}
        
        // Check if status or type is provided in the query parameters
        if (status) {
            query.status = status;
        }

        if (type) {
            query.type = type;
        }
        const message = await Message.find(query);
        
        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//GET: Get messages by id 
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

//PUT: update message by id
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

//DELETE: delete message by id
exports.delete = async (req, res) => {
    try {
        const { id } = req.params
        const message = await Message.findByIdAndDelete(id);
        if (!message) {
            return res.status(404).json({
                message: `Cannot find any message with ID ${id}`
            })
        }
        res.status(200).json({
            message: `Delete message with ID ${id} successful`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

