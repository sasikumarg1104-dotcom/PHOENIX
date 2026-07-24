import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";

import {
  followUserController,
  unfollowUserController,
  getFollowersController,
  getFollowingController,
} from "../controllers/follow.controller";

const router = Router();

// Follow User
router.post(
  "/users/:id/follow",
  authenticate,
  followUserController
);

// Unfollow User
router.delete(
  "/users/:id/follow",
  authenticate,
  unfollowUserController
);

// Followers List
router.get(
  "/users/:id/followers",
  getFollowersController
);

// Following List
router.get(
  "/users/:id/following",
  getFollowingController
);

export default router;