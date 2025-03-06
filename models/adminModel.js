import { models, model, Schema } from "mongoose";

const adminSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true,
  }
});

const AdminModel = models.admin || model('admin', adminSchema);

export default AdminModel;