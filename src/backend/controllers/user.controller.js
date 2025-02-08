import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import nodemailer from "nodemailer";

// Create a transporter for sending emails using Nodemailer.
// Ensure that your environment variables (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS) are correctly set.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., "smtp.ethereal.email"
  port: Number(process.env.SMTP_PORT), // e.g., 587 for Ethereal
  secure: false, // false for port 587, which uses STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const registerUser = asyncHandler(async (req, res) => {
  // Get the data from the request body
  const { name, email } = req.body;

  // Validate required fields
  if ([name, email].some((field) => field?.trim() === "")) {
    throw new apiError(400, "All fields are required");
  }

  // Check for duplicate user
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new apiError(409, "User already exists");
  }

  // Create a new user
  const user = await User.create({ name, email });
  if (!user) {
    throw new apiError(500, "Error creating user");
  }

  // Generate a random 6-digit verification code as a string
  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  // Store the verification code and its expiration time with the user record
  user.verificationCode = verificationCode;
  user.verificationExpires = Date.now() + 3600000; // Code expires in 1 hour
  await user.save({ validateBeforeSave: false });

  // Send the verification email
  try {
    let info = await transporter.sendMail({
      from: process.env.SMTP_USER, // sender address (should match a verified sender)
      to: email, // recipient
      subject: "Your Verification Code", // subject line
      text: `Your verification code is: ${verificationCode}`, // plain text body
      html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`, // HTML body
    });

    console.log("Message sent: %s", info.messageId);
    // If using Ethereal, you can preview the message via the returned URL
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error sending email:", error);
    throw new apiError(500, "Error sending email");
  }

  // Send the response back to the client
  return res
    .status(201)
    .json(
      new apiResponse(
        200,
        user,
        "User data stored successfully. Please check your email for the verification code."
      )
    );
});

export { registerUser };
