import prisma from "../config/prisma";

export const searchUsers = async (query: string) => {
  return prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: query,
            mode: "insensitive",
          },
        },
      ],
    },

    select: {
      id: true,
      name: true,
      profileImage: true,
    },

    take: 10,
  });
};

export const searchPosts = async (query: string) => {
  return prisma.post.findMany({
    where: {
      content: {
        contains: query,
        mode: "insensitive",
      },
    },

    include: {
      user: {
        select: {
          id: true,
          name: true,
          profileImage: true,
        },
      },

      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 10,
  });
};