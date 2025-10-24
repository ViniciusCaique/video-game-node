import { users } from "@/shared/config/db/schema/users";

export type CreateUserInput = typeof users.$inferInsert;
export type UpdateUserInput = Partial<
	Omit<CreateUserInput, "id" | "createdAt">
>;
