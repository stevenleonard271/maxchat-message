const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express()

const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))
app.use(express.json())


const mongooseConfig  = {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}
//koneksi ke database
db.mongoose.connect(db.url, mongooseConfig)
.then(()=>console.log("Database Connected"))
.catch(
    err => {
    console.log(`Failed to connect ${err.message}`);
    process.exit();
})

//Call the route
require("./app/routes/message.routes")(app);
require("./app/routes/contact.routes")(app);

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))