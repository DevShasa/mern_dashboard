import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";
//import getCountryIso3 from "country-iso-2-to-3"

export const getProducts = async (req, res)=>{
    console.log("WOLLLANDE ")
    try {
        const products = await Product.find()

        const productsWithStats = await Promise.all(
            products.map(async(product)=>{
                const stat = await  ProductStat.find({productId:product._id})

                return {...product._doc, stat}
            })
        )

        res.status(200).json(productsWithStats)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


