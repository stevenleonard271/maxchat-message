module.exports = mongoose => {
    const schema = mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
    },
        { versionKey: false }
    )

    return mongoose.model("contact", schema, "contact")
}