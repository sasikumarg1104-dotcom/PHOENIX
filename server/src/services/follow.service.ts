import { AppError } from "../utils/AppError";

import {
  findUserById,
  findFollow,
  createFollow,
  deleteFollow,
  getFollowers,
  getFollowing,
  getFollowerCount,
  getFollowingCount,
} from "../repositories/follow.repository";

// ==========================
// Follow User
// ==========================

export const followUserService = async (
  followerId: string,
  followingId: string
) => {
  if (followerId === followingId) {
    throw new AppError("You cannot follow yourself", 400);
  }

  const user = await findUserById(followingId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const existingFollow = await findFollow(followerId, followingId);

  if (existingFollow) {
    throw new AppError("You are already following this user", 400);
  }

  await createFollow(followerId, followingId);

  return {
    message: "User followed successfully",
    followerCount: await getFollowerCount(followingId),
    followingCount: await getFollowingCount(followerId),
  };
};

// ==========================
// Unfollow User
// ==========================

export const unfollowUserService = async (
  followerId: string,
  followingId: string
) => {
  const existingFollow = await findFollow(followerId, followingId);

  if (!existingFollow) {
    throw new AppError("You are not following this user", 400);
  }

  await deleteFollow(followerId, followingId);

  return {
    message: "User unfollowed successfully",
    followerCount: await getFollowerCount(followingId),
    followingCount: await getFollowingCount(followerId),
  };
};

// ==========================
// Get Followers
// ==========================

export const getFollowersService = async (userId: string) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return await getFollowers(userId);
};

// ==========================
// Get Following
// ==========================

export const getFollowingService = async (userId: string) => {
  const user = await findUserById(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return await getFollowing(userId);
};