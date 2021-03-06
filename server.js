const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./config/connectDB")
const customersRoute = require("./routes/studentsRoute")
const usersRoute = require("./routes/usersRoute")
const cors = require("cors")

dotenv.config()

const app = express()

//connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//routes
app.use("/api/v2/students", customersRoute);
app.use("/api/v2/users", usersRoute);

//home route
app.get("/", (req,res)=> {
    res.send("<h1>welcome to our students api</h1>")
})

const port = process.env.PORT || 7070;

app.listen(port, () => console.log(`server started on port ${port}`))