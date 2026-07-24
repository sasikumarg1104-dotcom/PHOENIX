import {
  getFeedPosts,
  getFeedPostCount,
} from "../repositories/feed.repository";

export const getFeedService = async (
  userId: string,
  page: number,
  limit: number
) => {
  const posts = await getFeedPosts(userId, page, limit);

  const totalPosts = await getFeedPostCount(userId);

  const totalPages = Math.ceil(totalPosts / limit);

  return {
    posts: posts.map((post) => ({
      id: post.id,
      content: post.content,
      image: post.image,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,

      user: {
        id: post.user.id,
        name: post.user.name,
        profileImage: post.user.profileImage,
      },

      likeCount: post._count.likes,
      commentCount: post._count.comments,

      likedByMe: post.likes.length > 0,
    })),

    pagination: {
      page,
      limit,
      totalPosts,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
};