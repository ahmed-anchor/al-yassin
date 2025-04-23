import { models, model, Schema } from "mongoose";

const product = Schema({
  name: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  productType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  categoryName: {
    type: String,
    required: true
  },
});

const ProductModel = models.product || model('product', product);

export default ProductModel;