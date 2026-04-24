import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    image: String,
    sellerId: String,
  },
  { timestamps: true },
);

export default mongoose.model("Product", productSchema);
