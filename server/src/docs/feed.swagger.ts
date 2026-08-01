/**
 * @swagger
 * tags:
 *   name: Feed
 *   description: Feed APIs
 */

/**
 * @swagger
 * /feed:
 *   get:
 *     summary: Get user feed
 *     tags: [Feed]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: Feed fetched successfully
 */

export {};