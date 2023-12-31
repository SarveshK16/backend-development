import connectDB from "./db/database.js";
import {app} from "./app.js"
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })
})
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`The server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed !", error)
})