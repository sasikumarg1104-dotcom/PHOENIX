import prisma from "../config/prisma";

export const getFeedPosts = async (
  userId: string,
  page: number,
  limit: number
) => {
  const skip = (page - 1) * limit;

  return prisma.post.findMany({
    where: {
      OR: [
        {
          userId,
        },
        {
          user: {
            followers: {
              some: {
                followerId: userId,
              },
            },
          },
        },
      ],
    },

    include: {
      user: {
        select: {
          id: true,
          name: true,
          profileImage: true,
        },
      },

      likes: {
        where: {
          userId,
        },
        select: {
          id: true,
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

    skip,
    take: limit,
  });
};

export const getFeedPostCount = async (userId: string) => {
  return prisma.post.count({
    where: {
      OR: [
        {
          userId,
        },
        {
          user: {
            followers: {
              some: {
                followerId: userId,
              },
            },
          },
        },
      ],
    },
  });
};