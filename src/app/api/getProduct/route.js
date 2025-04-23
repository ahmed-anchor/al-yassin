import connectDB from "../../../../lib/database";
import ProductModel from "../../../../models/productModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { productType } = body;

    if(!productType) {
      const products = await ProductModel.aggregate([
        {
          $group: {
            _id: "$productType", // Group by productType
            firstDocument: { $first: "$$ROOT" } // Get the first document in each group
          }
        },
        {
          $replaceRoot: { newRoot: "$firstDocument" } // Replace root to flatten the output
        }
      ]);
      return NextResponse.json(products);
    }


    const products = await ProductModel.find({ productType: productType });
    if (!products) {
      return NextResponse.json(
        { message: "No products found!" },
        { status: 404 }
      );
    }
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Try again" },
      { status: 500 }
    );
  }
}