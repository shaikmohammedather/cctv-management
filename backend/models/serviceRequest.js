import mongoose from "mongoose";
const serviceRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const serviceRequest = mongoose.model("ServiceRequest", serviceRequestSchema);
export default serviceRequest;
