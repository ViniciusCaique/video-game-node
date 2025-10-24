import {
	pgTable,
	timestamp,
	uuid,
	varchar,
	integer,
} from "drizzle-orm/pg-core";

export const users = pgTable("tb_users", {
	id: uuid().defaultRandom().primaryKey(),
	firstName: varchar({ length: 255 }).notNull(),
	lastName: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	password: varchar({ length: 255 }).notNull(),
	status: integer().notNull().default(1),
	emailVerifiedAt: timestamp(),
	inactivatedAt: timestamp(),
	createdAt: timestamp().notNull().defaultNow(),
	updatedAt: timestamp().notNull().defaultNow(),
});
