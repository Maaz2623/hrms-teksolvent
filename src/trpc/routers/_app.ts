import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { organizationRouter } from "../procedures/organization.procedure";
import { employeeRouter } from "../procedures/employee.procedure";
export const appRouter = createTRPCRouter({
  organizations: organizationRouter,
  employees: employeeRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
