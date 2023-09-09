import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import connectDB from "./config/db.js"
import clientRoutes from  "./routes/client.js"
import generalRoutes from  "./routes/general.js"
import managementRoutes from  "./routes/management.js"
import salesRoutes from  "./routes/sales.js"

// CONFIGURATION
dotenv.config() // load environment files from .env file into process.env
const app = express() // initialise express
app.use(express.json()) // middleware that parses incoming application/json  converts into a javascript obj in req.body
app.use(helmet()) // middleware that adds various security oriented headers to prevent attacks 
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"})) // sets cors policy to cross-origin
app.use(morgan("common"))
//app.use(bodyParser.json())
app.use(express.urlencoded({extended:false})) // parse url encoded info and place it in req.body
app.use(cors())

// MONGOOSE SETUP
const PORT = process.env.SERVER_PORT || 5001
connectDB()


// ROUTES
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)



// LISTEN
connectDB().then(()=>{
    app.listen(PORT, ()=> console.log(`📘 Server running on port ${PORT}`))
})

