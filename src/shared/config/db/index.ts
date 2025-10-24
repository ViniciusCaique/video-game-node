import { drizzle } from "drizzle-orm/node-postgres";
import type { PgTransaction } from "drizzle-orm/pg-core";
import type { PostgresJsQueryResultHKT } from "drizzle-orm/postgres-js";
import type { ExtractTablesWithRelations } from "drizzle-orm";
import { users } from "./schema/users";
import { env } from "@/shared/config/env";

export const db = drizzle({
	connection: {
		connectionString: env.DATABASE_URL,
	},
	schema: {
		users,
	},
});

type Schema = {
	users: typeof users;
};

export type Transaction = PgTransaction<
	PostgresJsQueryResultHKT,
	Schema,
	ExtractTablesWithRelations<Schema>
>;
