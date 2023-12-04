const mongoose = require('mongoose');
const db = require("../models")

const Contact = db.contact

//GET: Get all messages (filter: with query status and type)
exports.findAll = async (req, res) => {
    try {
        // const { status, type, page, limit } = req.query;
        let query = {}

        // // Check if status or type is provided in the query parameters
        // if (status) {
        //     query.status = status;
        // }

        // if (type) {
        //     query.type = type;
        // }

        // const pageNumber = parseInt(page) || 1;
        // const pageSize = parseInt(limit) || 10;
        // const skip = Math.max(0, (pageNumber - 1) * pageSize);
        // const totalDocuments = await Contact.countDocuments(query);
        // const contact = await Contact.find(query).skip(skip).limit(pageSize);
        const contact = await Contact.find(query)

        return res.status(200).json({
            success: true,
            // pagination: {
            //     currentPage: pageNumber,
            //     limit: pageSize,
            //     totalRecords: totalDocuments,
            //     totalPages: Math.ceil(totalDocuments / pageSize),
            // },
            data: contact,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//PUT: update message by id
exports.update = async (req, res) => {
    try {
        const { id } = req.params

        const validObjectId = mongoose.Types.ObjectId.isValid(id);

        if (!validObjectId) {
            return res.status(400).json({
                success: false,
                message: `Invalid ObjectId: ${id}`
            });
        }

        // const { type, text, attachment, status } = req.body;

        // if (type) {
        //     if (type !== "text" && type !== "image") {
        //         return res.status(400).json({
        //             success: false,
        //             message: "Type should be filled with 'text' or 'image'"
        //         });
        //     }

        //     // Check if the type is "text" and if text is provided
        //     if (type === "text" && !text) {
        //         return res.status(400).json({
        //             success: false,
        //             message: "For type 'text', path text is required."
        //         });
        //     }

        //     // Check if the type is "image" and if attachmentUrl is provided
        //     if (type === "image" && !attachment) {
        //         return res.status(400).json({
        //             success: false,
        //             message: "For type 'image', path attachment is required."
        //         });
        //     }

        // }

        // if (status) {
        //     if (status !== "pending" && status !== "delivered" && status !== "sent") {
        //         return res.status(400).json({
        //             success: false,
        //             message: "Status should be filled with 'pending' or 'delivered' or 'sent'"
        //         });
        //     }
        // }

        const message = await Contact.findByIdAndUpdate(id, req.body);

        if (!message) {
            return res.status(400).json({
                success: false,
                message: `Cannot find any contact with ID ${id}`
            })
        }

        const updatedMessage = await Contact.findById(id)
        return res.status(200).json({
            success: true,
            message: `Update contact with ID ${id} successful`,
            data: updatedMessage
        }
        )

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}