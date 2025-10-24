import { DrizzleUserRepository } from "@/modules/users/infrastructure/repositories/drizzle/drizzle-user-repository";

import { SignInUseCase } from "../usecases/sign-in-usecase";

export function makeSignInUseCase() {
	const userRepository = new DrizzleUserRepository();

	const signInUseCase = new SignInUseCase(userRepository);

	return signInUseCase;
}
