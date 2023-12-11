import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
//import getCountryIso3 from "country-iso-2-to-3"

export const getProducts = async (req, res)=>{
    console.log("WOLLLANDE ")
    try {
        const products = await Product.find()

        const productsWithStats = await Promise.all(
            products.map(async(product)=>{
                const stat = await  ProductStat.find({productId:product._id})

                return {...product._doc, stat:stat[0]}
            })
        )

        res.status(200).json(productsWithStats)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getCustomers = async (req, res) =>{
    try {
        const customers = await User.find({role:"user"}).select("-password");
        res.status(200).json(customers)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getTransactions = async(req, res)=>{
    try {
        // grab sorting info from the request queryparams
        // sort should have this structure {"field": "userId", "sort":"desc"}
        const {page = 1, pageSize= 20, sort=null, search=""} = req.query

        // if there is a sort passed into params, we eant to transform.
        // .. the request into something that looks like this {userId: -1}
        function transformSortRequestForMongo(){
            const parsedSortRequest = JSON.parse(sort)
            const transformedSortRequest = {
                [parsedSortRequest.field]: (parsedSortRequest.sort = "asc" ? 1 : -1)
            }

            return transformedSortRequest // eg {userId: -1}
        }

        const sortFields = Boolean(sort) ? transformSortRequestForMongo() : {}

        const transactions = await Transaction.find({
            // accomodating the search features
            // $or return transactions where either condition is met
            $or:[
                // match whatever is in search, i for case insensitive
                {cost:{$regex: new RegExp(search,"i")}}, 
                {userId:{$regex: new RegExp(search, "i")}}
            ]
        }).sort(sortFields).skip(page * pageSize).limit(pageSize)


        const total =  await Transaction.countDocuments({
            // name:{$regex: search, $options:"i"}
            $or:[
                // match whatever is in search, i for case insensitive
                {cost:{$regex: new RegExp(search,"i")}}, 
                {userId:{$regex: new RegExp(search, "i")}}
            ]
        })

        res.status(200).json({
            transactions,
            total
        })

        return
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
