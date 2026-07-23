import { PrismaClient } from "@prisma/client";

// Prisma client may not have generated model typings in some environments;
// cast to any to avoid TS property errors while runtime client is used.
const prisma = new PrismaClient() as any;

export const createPost = (
  userId: string,
  content: string,
  image?: string
) => {
  return prisma.post.create({
    data: {
      userId,
      content,
      image,
    },
  });
};

export const findAllPosts = () => {
  return prisma.post.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          profileImage: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const findPostById = (id: string) => {
  return prisma.post.findUnique({
    where: { id },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          profileImage: true,
        },
      },
    },
  });
};

export const updatePost = (
  id: string,
  content: string,
  image?: string
) => {
  return prisma.post.update({
    where: { id },
    data: {
      content,
      image,
    },
  });
};

export const deletePost = (id: string) => {
  return prisma.post.delete({
    where: { id },
  });
};