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
    return;
  }
  if (req.method === "POST") {
    const { name } = req.body;
    if (!name || name.length <= 3) {
      res.status(422).json({ status: "failed", message: "Invalid Data" });
      return;
    }

    try {
      const user = await User.create({
        name: "Sheri",
        age: 32,
        email: "Sheri.sadeghi@gamil.com",
        phone: "09141840000",
        adress: { city: "Bukan", street: "Kurdistan" },
        courses: ["react", "next"],
      });
      res
        .status(201)
        .json({ status: "sucess", message: "Data Created", data: user });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Error in storing in database" });
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find();
      res.statue(200).json({ status: "success", data: users });
    } catch (err) {
      res
        .status(500)
        .json({
          status: "failed",
          message: "Error in retriving data in database",
        });
    }
  }
}
