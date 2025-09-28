import { users } from "@/shared/config/db/schema/users";




export type User = typeof users.$inferSelect


export const UserStatus = {
  INACTIVE: 0,
  ACTIVE: 1,
  SUSPENDED: 2,
} as const;