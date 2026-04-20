import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    address: {
      type: String,
      // required: [true, "Address is required"],
    },
  },

  { timestamps: true },
);

const Customer = mongoose.model("customer", customerSchema);
export default Customer;
