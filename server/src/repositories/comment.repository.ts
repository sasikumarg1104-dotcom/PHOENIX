import prisma from "../config/prisma";

export const createComment = async (
  content: string,
  userId: string,
  postId: string
) => {
  return prisma.comment.create({
    data: {
      content,
      userId,
      postId,
    },
  });
};

export const findCommentById = async (commentId: string) => {
  return prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });
};

export const findCommentsByPostId = async (postId: string) => {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateComment = async (
  commentId: string,
  content: string
) => {
  return prisma.comment.update({
    where: {
      id: commentId,
    },
    data: {
      content,
    },
  });
};

export const deleteComment = async (commentId: string) => {
  return prisma.comment.delete({
    where: {
      id: commentId,
    },
  });
};

export const getCommentCount = async (postId: string) => {
  return prisma.comment.count({
    where: {
      postId,
    },
  });
};