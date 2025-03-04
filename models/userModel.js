import { models, model, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true
  }
});

const UserModel = models.user || model('user', userSchema);

export default UserModel;