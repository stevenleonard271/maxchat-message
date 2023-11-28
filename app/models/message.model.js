module.exports = mongoose => {
    const schema = mongoose.Schema({
        type: { type: String, required: true },
        from: { type: String, required: true },
        status: { type: String, required: true },
        text: { type: String, required: true },
        attachment: { type: String },
        meta: {
            header: {
                text: { type: String }
            },
            body: [
                {
                    index: { type: Number },
                    type: { type: String }
                }
            ]
        },
        date: { type: String }
    });
    return mongoose.model("message", schema,"message")
}