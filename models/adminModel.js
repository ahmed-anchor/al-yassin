import { models, model, Schema } from "mongoose";

const adminSchema = Schema({
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

const AdminModel = models.admin || model('admin', adminSchema);

export default AdminModel;