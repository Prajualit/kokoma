import { apiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { apiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // Get the data from the request body
  const { name, phone } = req.body;

  // Check if the email and phone number are provided
  if ([name, phone].some((field) => field?.trim() === "")) {
    throw new apiError(400, "All fields are required");
  }

  //Duplicate responses check
  const existedUser = await User.findOne({ phone });
  if (existedUser) {
    throw new apiError(409, "User already exists");
  }

  // Create a new user
  const user = await User.create({ name, phone });
  if (!user) {
    throw new apiError(500, "Error creating user");
  }

  // Send the response
  return res
    .status(201)
    .json(new apiResponse(200, user, "User Data stored successfully"));
});

export { registerUser };
