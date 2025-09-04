import { InferSelectModel, sql } from "drizzle-orm";
import {
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const companies = pgTable("companies", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),

  name: varchar("name", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }).unique(), // e.g. vanguox.com
  registrationNumber: varchar("registration_number", { length: 100 }), // govt reg id
  gstNumber: varchar("gst_number", { length: 100 }), // for India

  address: text("address"),
  city: varchar("city", { length: 100 }),
  state: varchar("state", { length: 100 }),
  country: varchar("country", { length: 100 }),
  postalCode: varchar("postal_code", { length: 20 }),

  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 255 }),

  logoUrl: text("logo_url"),

  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updated_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const employees = pgTable("employees", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),

  companyId: uuid("company_id")
    .notNull()
    .references(() => companies.id, { onDelete: "cascade" }),

  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: text("email").notNull().unique(),
  phone: varchar("phone", { length: 15 }),

  department: varchar("department", { length: 100 }),
  designation: varchar("designation", { length: 100 }),

  employeeCode: varchar("employee_code", { length: 50 }).unique(), // internal employee ID
  employmentType: varchar("employment_type", { length: 50 }), // e.g. full-time, part-time, intern, contractor

  dateOfJoining: timestamp("date_of_joining", {
    withTimezone: true, // optional, depending on if you care about timezone
    mode: "date",
  }).notNull(),

  dateOfExit: timestamp("date_of_exit", {
    withTimezone: true,
    mode: "date",
  }),
  status: varchar("status", { length: 20 }).default("active"), // active, resigned, terminated, etc.

  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date()
  ),
});

export type Employee = InferSelectModel<typeof employees>;
