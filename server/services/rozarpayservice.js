import dotenv from "dotenv";
dotenv.config();
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RORAZERPAY_API_KEY,
  key_secret: process.env.RORAZERPAY_SECERT_KEY,
});

export default razorpay;
