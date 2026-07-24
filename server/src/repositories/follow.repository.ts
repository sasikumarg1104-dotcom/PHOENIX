import prisma from "../config/prisma";

export const findUserById = async (userId: string) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const findFollow = async (
  followerId: string,
  followingId: string
) => {
  return prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });
};

export const createFollow = async (
  followerId: string,
  followingId: string
) => {
  return prisma.follow.create({
    data: {
      followerId,
      followingId,
    },
  });
};

export const deleteFollow = async (
  followerId: string,
  followingId: string
) => {
  return prisma.follow.delete({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });
};

export const getFollowers = async (userId: string) => {
  return prisma.follow.findMany({
    where: {
      followingId: userId,
    },
    include: {
      follower: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        },
      },
    },
  });
};

export const getFollowing = async (userId: string) => {
  return prisma.follow.findMany({
    where: {
      followerId: userId,
    },
    include: {
      following: {
        select: {
          id: true,
          name: true,
          email: true,
          profileImage: true,
        },
      },
    },
  });
};

export const getFollowerCount = async (userId: string) => {
  return prisma.follow.count({
    where: {
      followingId: userId,
    },
  });
};

export const getFollowingCount = async (userId: string) => {
  return prisma.follow.count({
    where: {
      followerId: userId,
    },
  });
};