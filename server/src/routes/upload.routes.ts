import { Router } from "express";

import { authenticate } from "../middleware/auth.middleware";
import upload from "../middleware/upload.middleware";
import { uploadImageController } from "../controllers/upload.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  upload.single("image"),
  uploadImageController
);

export default router;