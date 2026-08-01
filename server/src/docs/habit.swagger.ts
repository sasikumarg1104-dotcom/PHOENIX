/**
 * @swagger
 * tags:
 *   name: Habits
 *   description: Habit Tracker APIs
 */

/**
 * @swagger
 * /habits:
 *   post:
 *     summary: Create a new habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - frequency
 *               - priority
 *               - difficulty
 *               - targetDays
 *             properties:
 *               title:
 *                 type: string
 *                 example: Morning Workout
 *               description:
 *                 type: string
 *                 example: Workout for 45 minutes
 *               category:
 *                 type: string
 *                 example: Fitness
 *               frequency:
 *                 type: string
 *                 enum:
 *                   - DAILY
 *                   - WEEKLY
 *                   - MONTHLY
 *               priority:
 *                 type: string
 *                 enum:
 *                   - LOW
 *                   - MEDIUM
 *                   - HIGH
 *               difficulty:
 *                 type: string
 *                 enum:
 *                   - EASY
 *                   - MEDIUM
 *                   - HARD
 *               targetDays:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       201:
 *         description: Habit created successfully
 */

/**
 * @swagger
 * /habits:
 *   get:
 *     summary: Get all habits
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of habits
 */

/**
 * @swagger
 * /habits/{id}:
 *   get:
 *     summary: Get habit by ID
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit details
 *       404:
 *         description: Habit not found
 */

/**
 * @swagger
 * /habits/{id}:
 *   patch:
 *     summary: Update a habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Habit updated successfully
 */

/**
 * @swagger
 * /habits/{id}:
 *   delete:
 *     summary: Delete a habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Habit deleted successfully
 */


/**
 * @swagger
 * /api/habits/{id}/complete:
 *   post:
 *     summary: Complete a habit
 *     tags: [Habits]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Habit ID
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               notes:
 *                 type: string
 *                 example: Completed today's workout 💪
 *     responses:
 *       200:
 *         description: Habit completed successfully
 *       400:
 *         description: Already completed today or invalid request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Habit not found
 */
export {};