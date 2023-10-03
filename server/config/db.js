import mongoose from "mongoose"


export default async function connectDB(){
    try {
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Mongodb Connection success 👍")
    } catch (error) {
        console.log("Mongodb Connection Failed ❌")
        console.log(error)
        process.exit(1)
    }
}