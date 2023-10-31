import connectDB from "../../../utils/connectDB";
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

  const id = req.query.userId;
  if (req.method === "GET") {
    try {
      constuserData = await User.findById(id);

      res.status(200).json({ status: "success", data: "yes" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Erro in retriving data in database",
      });
    }
  } else if (req.method === "PATCH") {
    try {
      const userData = await User.findById(id);
      userData.email = req.body.email;
      await userData.save();
      res.status(200).json({
        status: "sucess",
        data: userData,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Error in updating data in database",
      });
    }
  }
}
