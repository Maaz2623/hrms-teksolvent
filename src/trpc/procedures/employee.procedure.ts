import z from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { db } from "@/db";
import { employees } from "@/db/schema";
import { eq } from "drizzle-orm";

export const employeeRouter = createTRPCRouter({
  createEmployee: baseProcedure
    .input(
      z.object({
        companyId: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
        phone: z.string(),
        department: z.string(),
        designation: z.string(),
        employeeCode: z.string(),
        employmentType: z.string(),
        dateOfJoining: z.date(),
        dateOfExit: z.date().optional(),
        status: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const [newEmployee] = await db
          .insert(employees)
          .values({
            ...input,
          })
          .returning();

        return newEmployee;
      } catch (error) {
        console.log(error);
      }
    }),
  getEmployees: baseProcedure
    .input(
      z.object({
        organizationId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const employeesData = await db
        .select()
        .from(employees)
        .where(eq(employees.companyId, input.organizationId));

      return employeesData;
    }),
});
