import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { organizationRouter } from "../procedures/organization.procedure";
export const appRouter = createTRPCRouter({
  organizations: organizationRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
