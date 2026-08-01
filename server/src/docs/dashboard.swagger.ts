/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard Statistics APIs
 */

/**
 * @swagger
 * /api/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard statistics fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Dashboard fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalHabits:
 *                       type: integer
 *                       example: 10
 *                     activeHabits:
 *                       type: integer
 *                       example: 8
 *                     completedToday:
 *                       type: integer
 *                       example: 5
 *                     pendingToday:
 *                       type: integer
 *                       example: 3
 *                     highestCurrentStreak:
 *                       type: integer
 *                       example: 15
 *                     highestBestStreak:
 *                       type: integer
 *                       example: 30
 *                     completionRate:
 *                       type: number
 *                       example: 62.5
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */

export {};