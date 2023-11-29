module.exports = mongoose => {
    const schema = mongoose.Schema({
        type: { type: String, required: true },
        from: { type: String, required: true },
        status: { type: String, required: true },
        text: { type: String },
        attachment: { type: String }, //optional
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
        }, //optional
        date: { type: String}
    },
        { versionKey: false }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id

        return object
    })
    return mongoose.model("message", schema, "message")
}