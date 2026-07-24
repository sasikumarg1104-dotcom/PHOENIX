import prisma from "../config/prisma";

export const findLike = async (userId: string, postId: string) => {
  return prisma.like.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
};

export const createLike = async (userId: string, postId: string) => {
  return prisma.like.create({
    data: {
      userId,
      postId,
    },
  });
};

export const deleteLike = async (userId: string, postId: string) => {
  return prisma.like.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
};

export const getLikeCount = async (postId: string) => {
  return prisma.like.count({
    where: {
      postId,
    },
  });
};
