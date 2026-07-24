import prisma from "../config/prisma";

export const findUserById = async (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
      profileImage: true,
    },
  });
};

export const getUserStats = async (userId: string) => {
  const [followers, following, posts] = await Promise.all([
    prisma.follow.count({
      where: {
        followingId: userId,
      },
    }),

    prisma.follow.count({
      where: {
        followerId: userId,
      },
    }),

    prisma.post.count({
      where: {
        userId,
      },
    }),
  ]);

  return {
    followers,
    following,
    posts,
  };
};

export const isFollowingUser = async (
  currentUserId: string,
  profileUserId: string
) => {
  const follow = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: profileUserId,
      },
    },
  });

  return !!follow;
};

export const getRecentPosts = async (userId: string) => {
  return prisma.post.findMany({
    where: {
      userId,
    },

    include: {
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

    take: 5,
  });
};