import mongoose from "mongoose";
import connectDB from "./../../../utils/connectDB";
import User from "./../../../models/User";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
  }
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

    // const user = new User({name});
    // await user.save();

    try {
      const user = await User.create({ name:"Sheri",age:32,email:"Sheri.sadeghi@gamil.com" });
      res
        .status(201)
        .json({ status: "sucess", message: "Data Created", data: user });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in connecting to database" });
    }
  }
}
