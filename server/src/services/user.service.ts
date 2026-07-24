import { AppError } from "../utils/AppError";

import {
  findUserById,
  getUserStats,
  isFollowingUser,
  getRecentPosts,
} from "../repositories/user.repository";

export const getUserProfileService = async (
  currentUserId: string,
  profileUserId: string
) => {
  const user = await findUserById(profileUserId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const [stats, following, recentPosts] = await Promise.all([
    getUserStats(profileUserId),
    isFollowingUser(currentUserId, profileUserId),
    getRecentPosts(profileUserId),
  ]);

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    bio: user.bio,
    profileImage: user.profileImage,

    followers: stats.followers,
    following: stats.following,
    posts: stats.posts,

    isFollowing: following,

    recentPosts: recentPosts.map((post) => ({
      id: post.id,
      content: post.content,
      image: post.image,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,

      likeCount: post._count.likes,
      commentCount: post._count.comments,
    })),
  };
};