import prisma from "../config/prisma";

export const getDashboardStatsRepository = async (userId: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [
    totalHabits,
    activeHabits,
    categoryDistribution,
    completedToday,
    topHabit,
    highestCurrentStreak,
    highestBestStreak,
    recentCompletions,
  ] = await Promise.all([
    prisma.habit.count({
      where: {
        userId,
      },
    }),

    // Active Habits
    prisma.habit.count({
      where: {
        userId,
        isActive: true,
      },
    }),

    prisma.habit.groupBy({
      by: ["category"],
      where: {
        userId,
        isActive: true,
      },
      _count: {
        category: true,
      },
      orderBy: {
        _count: {
          category: "desc",
        },
      },
    }),

    // Completed Today
    prisma.habitCompletion.count({
      where: {
        habit: {
          userId,
          isActive: true,
        },
        completionDate: {
          gte: today,
          lt: tomorrow,
        },
      },
    }),

    prisma.habit.findFirst({
      where: {
        userId,
        isActive: true,
      },
      orderBy: [
        {
          bestStreak: "desc",
        },
        {
          streak: "desc",
        },
      ],
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        frequency: true,
        priority: true,
        difficulty: true,
        streak: true,
        bestStreak: true,
        targetDays: true,
        createdAt: true,
      },
    }),

    // Highest Current Streak
    prisma.habit.findFirst({
      where: {
        userId,
        isActive: true,
      },
      orderBy: {
        streak: "desc",
      },
      select: {
        streak: true,
      },
    }),

    // Highest Best Streak
    prisma.habit.findFirst({
      where: {
        userId,
        isActive: true,
      },
      orderBy: {
        bestStreak: "desc",
      },
      select: {
        bestStreak: true,
      },
    }),

    // ⭐ Recent Completions
    prisma.habitCompletion.findMany({
      where: {
        habit: {
          userId,
          isActive: true,
        },
      },
      orderBy: {
        completedAt: "desc",
      },
      take: 5,
      select: {
        id: true,
        completedAt: true,
        completionDate: true,
        notes: true,
        habit: {
          select: {
            id: true,
            title: true,
            category: true,
            streak: true,
            bestStreak: true,
          },
        },
      },
    }),
  ]);

  const formattedCategoryDistribution = categoryDistribution.map((item) => ({
    category: item.category,
    count: item._count.category,
  }));

  const pendingToday = Math.max(activeHabits - completedToday, 0);

  const completionRate =
    activeHabits === 0
      ? 0
      : Number(((completedToday / activeHabits) * 100).toFixed(2));

 return {
  overview: {
    totalHabits,
    activeHabits,
    completedToday,
    pendingToday,
    highestCurrentStreak: highestCurrentStreak?.streak ?? 0,
    highestBestStreak: highestBestStreak?.bestStreak ?? 0,
    completionRate,
  },

  recentCompletions,

  topHabit,

  categoryDistribution: formattedCategoryDistribution,
};
};