import { models, model, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true, // Critical for preventing duplicates
    index: true
  }
});

const UserModel = models.user || model('user', userSchema);

export default UserModel;