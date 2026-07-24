import {
  searchUsers,
  searchPosts,
} from "../repositories/search.repository";

export const searchUsersService = async (query: string) => {
  return searchUsers(query);
};

export const searchPostsService = async (query: string) => {
  const posts = await searchPosts(query);

  return posts.map((post) => ({
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
  }));
};