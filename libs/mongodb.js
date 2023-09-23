import mongoose from "mongoose"


export async function connect(){
    try {
      await mongoose.connect(process.env.MONGO-URI)
      console.log("connected successfully")
    } catch (error) {
        console.log(error)
        
    }
}