import { db } from "@/db";
import { baseProcedure, createTRPCRouter } from "../init";
import { companies } from "@/db/schema";
import { eq } from "drizzle-orm";
import z from "zod";

export const organizationRouter = createTRPCRouter({
  getOrganization: baseProcedure
    .input(
      z.object({
        organizationId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const [organization] = await db
        .select()
        .from(companies)
        .where(eq(companies.id, input.organizationId));

      return organization;
    }),
});
