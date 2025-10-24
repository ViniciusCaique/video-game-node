import { Transaction } from "@/shared/config/db";
import { User } from "../../domain/user";
import {
	CreateUserInput,
	UpdateUserInput,
} from "../../domain/repository-types";

export interface UserRepository {
	findByEmail(email: string, tx?: Transaction): Promise<User | undefined>;
	findById(id: string, tx?: Transaction): Promise<User | undefined>;
	create(data: CreateUserInput, tx?: Transaction): Promise<User>;
	update(id: string, data: UpdateUserInput, tx?: Transaction): Promise<void>;
	delete(id: string, tx?: Transaction): Promise<void>;
}
