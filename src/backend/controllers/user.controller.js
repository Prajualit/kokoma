import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";
import nodemailer from "nodemailer";

const registerUser = asyncHandler(async (req, res) => {
  // Get the data from the request body
  const { name, email } = req.body;

  // Validate required fields
  if (!name?.trim() || !email?.trim()) {
    throw new apiError(400, "All fields are required");
  }

  // Check for duplicate user
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new apiError(409, "User already exists");
  }

  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "heidi61@ethereal.email",
      pass: "eXvBFUqnnxnDBsRGVF",
    },
  });
  // Generate a verification code
  const verificationCode = Math.floor(
    100000 + Math.random() * 900000
  ).toString();

  try {
    let mailInfo = await transporter.sendMail({
      from: '"KOKOMA" <heidi61@ethereal.email>',
      to: email,
      subject: "Verification Code",
      text: `Your verification code is ${verificationCode}`,
    });
    console.log("Message sent: %s", mailInfo.messageId);

  } catch (error) {
    console.log("Error while sending mail : ",error);
    throw new apiError(500, "Error sending mail");
  }


  // Create a new user with verification code
  const user = await User.create({ name, email, verificationCode });
  if (!user) {
    throw new apiError(500, "Error creating user");
  }

  // Send the response back to the client
  return res
    .status(201)
    .json(
      new apiResponse(
        201,
        user,
        "User registered successfully. Please check your email for the verification code."
      )
    );
});

export { registerUser };
