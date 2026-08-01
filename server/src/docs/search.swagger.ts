/**
 * @swagger
 * tags:
 *   name: Search
 *   description: Search APIs
 */

/**
 * @swagger
 * /search/users:
 *   get:
 *     summary: Search users
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         example: sasikumar
 *     responses:
 *       200:
 *         description: Users fetched successfully
 */

/**
 * @swagger
 * /search/posts:
 *   get:
 *     summary: Search posts
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: q
 *         required: true
 *         schema:
 *           type: string
 *         example: motivation
 *     responses:
 *       200:
 *         description: Posts fetched successfully
 */

export {};