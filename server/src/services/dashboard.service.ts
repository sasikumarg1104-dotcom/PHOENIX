import { getDashboardStatsRepository } from "../repositories/dashboard.repository";

export const getDashboardStatsService = async (userId: string) => {
  const dashboardStats = await getDashboardStatsRepository(userId);

  return dashboardStats;
};