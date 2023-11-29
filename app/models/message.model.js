module.exports = mongoose => {
    const schema = mongoose.Schema({
        type: { type: String, required: true },
        from: { type: String, required: true },
        status: { type: String, required: true },
        text: { type: String },       //optional if type = image
        attachment: { type: String }, //optional if type = text
        meta: {
            header: {
                text: { type: String }
            },
            body: [
                {
                    _id: false,
                    index: { type: Number },
                    type: { type: String }
                }
            ]
        }, //optional
        date: { type: String }
    },
        { versionKey: false }
    );

    schema.method("toJSON", function () {
        const { __v, _id, date, meta, ...rest } = this.toObject()

        const object = {
            id: _id,
            ...rest,
        }

        if (meta && meta.body && Array.isArray(meta.body)) {
            object.meta = {
                ...meta,
                body: meta.body.map(({ _id, ...subdoc }) => subdoc),
            }
        }
        object.date = date
        return object
    })
    return mongoose.model("message", schema, "message")
}