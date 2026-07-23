import { Router } from "express";
import { validate } from "../middleware/validate.middleware";
import { updateProfileSchema } from "../validators/updateProfile.validator";

import {
  register,
  login,
  profile,
  updateProfileController,
} from "../controllers/auth.controller";

import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", authenticate, profile);
router.put(
  "/profile",
  authenticate,
  validate(updateProfileSchema),
  updateProfileController
);

export default router;