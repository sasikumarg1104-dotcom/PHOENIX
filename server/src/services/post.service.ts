import { AppError } from "../utils/AppError";
import {
  createPost,
  findAllPosts,
  findPostById,
  updatePost,
  deletePost,
} from "../repositories/post.repository";

import {
  CreatePostInput,
  UpdatePostInput,
} from "../validators/post.validator";

export const createPostService = async (
  userId: string,
  data: CreatePostInput
) => {
  return createPost(userId, data.content, data.image);
};

export const getAllPostsService = async () => {
  return findAllPosts();
};

export const getPostByIdService = async (id: string) => {
  const post = await findPostById(id);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  return post;
};

export const updatePostService = async (
  postId: string,
  userId: string,
  data: UpdatePostInput
) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  if (post.userId !== userId) {
    throw new AppError("You are not authorized to update this post", 403);
  }

  return updatePost(
    postId,
    data.content ?? post.content,
    data.image ?? post.image ?? undefined
  );
};

export const deletePostService = async (
  postId: string,
  userId: string
) => {
  const post = await findPostById(postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  if (post.userId !== userId) {
    throw new AppError("You are not authorized to delete this post", 403);
  }

  await deletePost(postId);

  return {
    message: "Post deleted successfully",
  };
};