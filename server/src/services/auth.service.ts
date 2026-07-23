import { RegisterInput } from "../validators/auth.validator";
import { LoginInput } from "../validators/login.validator";
import { UpdateProfileInput } from "../validators/updateProfile.validator";

import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

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
    throw new Error("Email already exists");
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
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await comparePassword(
    data.password,
    user.password
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
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
    throw new Error("User not found");
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
    throw new Error("User not found");
  }

  const updatedUser = await updateUser(userId, data);

  return updatedUser;
};