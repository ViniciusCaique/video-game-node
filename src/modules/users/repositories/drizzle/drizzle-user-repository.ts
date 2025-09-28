import { db, Transaction } from "@/shared/config/db";
import { CreateUserInput, UpdateUserInput } from "../../models/dtos/repository-dto";
import { User, UserStatus } from "../../models/user-model";
import { UserRepository } from "../user-repository";
import { eq } from "drizzle-orm";
import { users } from '@/shared/config/db/schema/users';



export class DrizzleUserRepository implements UserRepository {

  async findByEmail(email: string, tx?: Transaction): Promise<User | undefined> {
    const dbInstance = tx ?? db

    const [user] = await dbInstance.select().from(users).where(eq( users.email, email )).limit(1)

    return user
  }

  async findById(id: string, tx?: Transaction): Promise<User | undefined> {
    const dbInstance = tx ?? db

    const [user] = await dbInstance.select().from(users).where(eq( users.id, id )).limit(1)

    return user
  }

  async create(data: CreateUserInput, tx?: Transaction): Promise<User> {
    const dbInstance = tx ?? db;

		const [user] = await dbInstance.insert(users).values(data).returning();

    if (!user) {
      throw new Error('Failed to create user.');
    }

		return user;
  }

  async update(id: string, data: UpdateUserInput, tx?: Transaction): Promise<void> {
    const dbInstance = tx ?? db;

		await dbInstance.update(users).set(data).where(eq(users.id, id));
  }

  async delete(id: string, tx?: Transaction): Promise<void> {
    const dbInstance = tx ?? db;

		await dbInstance.update(users).set({ status: UserStatus.INACTIVE, updatedAt: new Date(), inactivatedAt: new Date() }).where(eq(users.id, id));
  }
  
}