import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import nodemailer from "nodemailer";

// Create a transporter for sending emails using Nodemailer.
// Ensure you have set SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, and SMTP_PASS in your environment.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., "smtp.gmail.com"
  port: Number(process.env.SMTP_PORT), // e.g., 465 or 587
  secure: process.env.SMTP_SECURE === "true", // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const registerUser = asyncHandler(async (req, res) => {
  // Get the data from the request body
  const { name, email } = req.body;

  // Check if the required fields are provided
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

  // Optionally, you could store the verification code and its expiration time with the user record:
  user.verificationCode = verificationCode;
  user.verificationExpires = Date.now() + 3600000; // Code expires in 1 hour
  await user.save();

  // Define the email options
  const mailOptions = {
    from: process.env.SMTP_FROM, // Set a verified sender email
    to: email,
    subject: "Your Verification Code",
    text: `Your verification code is: ${verificationCode}`,
    html: `<p>Your verification code is: <strong>${verificationCode}</strong></p>`,
  };

  // Attempt to send the verification email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new apiError(500, "Failed to send verification email");
  }

  // Send the response
  return res
    .status(201)
    .json(new apiResponse(200, user, "User data stored successfully. Verification email sent."));
});

export { registerUser };
