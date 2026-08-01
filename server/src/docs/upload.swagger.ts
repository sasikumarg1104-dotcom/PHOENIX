/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Image Upload APIs
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload image to Cloudinary
 *     tags: [Upload]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Image uploaded successfully
 *       400:
 *         description: Invalid image
 */

export {};