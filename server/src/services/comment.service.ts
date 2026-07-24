import { AppError } from "../utils/AppError";

import { findPostById } from "../repositories/post.repository";

import {
  createComment,
  findCommentById,
  findCommentsByPostId,
  updateComment,
  deleteComment,
  getCommentCount,
} from "../repositories/comment.repository";

// ==========================
// Create Comment
// ==========================

export const createCommentService = async (
  content: string,
  userId: string,
  postId: string
) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  await createComment(content, userId, postId);

  return {
    message: "Comment added successfully",
    commentCount: await getCommentCount(postId),
  };
};

// ==========================
// Get Comments
// ==========================

export const getCommentsService = async (postId: string) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return await findCommentsByPostId(postId);
};

// ==========================
// Update Comment
// ==========================

export const updateCommentService = async (
  commentId: string,
  content: string,
  userId: string
) => {
  const comment = await findCommentById(commentId);

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.userId !== userId) {
    throw new AppError("Unauthorized", 403);
  }

  return await updateComment(commentId, content);
};

// ==========================
// Delete Comment
// ==========================

export const deleteCommentService = async (
  commentId: string,
  userId: string
) => {
  const comment = await findCommentById(commentId);

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  if (comment.userId !== userId) {
    throw new AppError("Unauthorized", 403);
  }

  await deleteComment(commentId);

  return {
    message: "Comment deleted successfully",
    commentCount: await getCommentCount(comment.postId),
  };
};