import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
  },
  phone: String,
  age: {
    type: Number,
    min: 10,
    max: 50,
  },
  email: {
    type: String,
    required: true,
  },
  adress: {
    city: String,
    street: String,
    alley: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
