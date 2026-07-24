import { AppError } from "../utils/AppError";

import { findPostById } from "../repositories/post.repository";

import {
  findLike,
  createLike,
  deleteLike,
  getLikeCount,
} from "../repositories/like.repository";

export const likePostService = async (
  userId: string,
  postId: string
) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  const existingLike = await findLike(userId, postId);

  if (existingLike) {
    throw new AppError("You already liked this post", 400);
  }

  await createLike(userId, postId);

  return {
    message: "Post liked successfully",
    likeCount: await getLikeCount(postId),
  };
};

export const unlikePostService = async (
  userId: string,
  postId: string
) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  const existingLike = await findLike(userId, postId);

  if (!existingLike) {
    throw new AppError("Like not found", 404);
  }

  await deleteLike(userId, postId);

  return {
    message: "Post unliked successfully",
    likeCount: await getLikeCount(postId),
  };
};