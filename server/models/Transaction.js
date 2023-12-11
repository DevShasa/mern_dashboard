import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
	{
		userId: String,
		cost: String,
		products: [
            {
                type: mongoose.Types.ObjectId,
                //ref:'Product'  to reference product
            }
        ]
        // how it should be done 
        // products: [
        //     { productId: 'product1ObjectId', quantity: 2 },
        //     { productId: 'product2ObjectId', quantity: 1 },]
	},
	{ timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
