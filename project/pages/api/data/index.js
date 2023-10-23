import mongoose from "mongoose";
import connectDB from './../../../utils/connectDB';

export default async function handler(req, res) {
    await connectDB();
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.length <= 3) {
      res.status(422).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    //connect to DB
    // mongoose.connect(
    //   "mongodb+srv://jamal:j11067@cluster0.lnfefkh.mongodb.net/?retryWrites=true&w=majority", 
    //   () => console.log("Connect to DB")
    // );
    res
      .status(201)
      .json({ status: "Sucess", message: "Data Created", data: { name } });
  }
}
