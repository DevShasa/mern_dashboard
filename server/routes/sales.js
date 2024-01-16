import express from "express"
import { getSales } from "../controllers/sales.js";

const router = express.Router()
console.log("SALES HIT")

router.get("/", getSales)


export default router;