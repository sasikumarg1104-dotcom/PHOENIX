/**
 * @swagger
 * tags:
 *   name: Follow
 *   description: Follow & Unfollow APIs
 */

/**
 * @swagger
 * /users/{id}/follow:
 *   post:
 *     summary: Follow a user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User followed successfully
 */

/**
 * @swagger
 * /users/{id}/follow:
 *   delete:
 *     summary: Unfollow a user
 *     tags: [Follow]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User unfollowed successfully
 */

/**
 * @swagger
 * /users/{id}/followers:
 *   get:
 *     summary: Get followers
 *     tags: [Follow]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Followers fetched successfully
 */

/**
 * @swagger
 * /users/{id}/following:
 *   get:
 *     summary: Get following
 *     tags: [Follow]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Following fetched successfully
 */

export {};