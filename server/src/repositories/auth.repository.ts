import prisma from "../config/db";

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
};

export const findUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
      profileImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const updateUser = async (
  id: string,
  data: {
    name?: string;
    bio?: string;
    profileImage?: string;
  }
) => {
  return prisma.user.update({
    where: {
      id,
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      bio: true,
      profileImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};