import Customer from "../models/customer.js";
// customer creation
const customerCreation = async (req, res) => {
  try {
    const consumers = new Customer(req.body);
    await consumers.save();
    res.status(201).json(consumers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get customers
const getCustomers = async (req, res) => {
  try {
    const consumers = await Customer.find();
    res.json(consumers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update customer
const updateCustomer = async (req, res) => {
  try {
    const consumers = await Customer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!consumers) {
      return res.status(404).json({ message: "Customer not found" });
    }
    res.json(consumers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete customer
const deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  customerCreation,
  getCustomers,
  updateCustomer,
  deleteCustomer,
};
