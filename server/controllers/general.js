import User from "../models/User.js"

export const getUser = async(req, res) =>{

    try {
        const { id } = req.params;
        const user = await  User.findById(id)
        //console.log("USER ----> ",user)

        if(user){
            res.status(200).json(user)
        }else{
            throw new Error("Could not find user")
        }
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}