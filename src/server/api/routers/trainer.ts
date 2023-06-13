import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";

export const trainerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.trainer.findMany()
  }),
});
