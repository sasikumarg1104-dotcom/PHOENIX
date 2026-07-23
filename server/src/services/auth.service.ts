import { RegisterInput } from "../validators/auth.validator";
import { LoginInput } from "../validators/login.validator";
import { UpdateProfileInput } from "../validators/updateProfile.validator";

import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";
import { AppError } from "../utils/AppError";

import {
  findUserByEmail,
  createUser,
  findUserById,
  updateUser,
} from "../repositories/auth.repository";

// ==========================
// Register User
// ==========================
export const registerUser = async (data: RegisterInput) => {
  const existingUser = await findUserByEmail(data.email);

  if (existingUser) {
    throw new AppError("Email already exists", 409);
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await createUser(
    data.name,
    data.email,
    hashedPassword
  );

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };
};

// ==========================
// Login User
// ==========================
export const loginUser = async (data: LoginInput) => {
  const user = await findUserByEmail(data.email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await comparePassword(
    data.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const accessToken = generateToken(user.id);

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    accessToken,
  };
};

// ==========================
// Get Profile
// ==========================
export const getProfile = async (userId: string) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

// ==========================
// Update Profile
// ==========================
export const updateProfile = async (
  userId: string,
  data: UpdateProfileInput
) => {
  const existingUser = await findUserById(userId);

  if (!existingUser) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = await updateUser(userId, data);

  return updatedUser;
};