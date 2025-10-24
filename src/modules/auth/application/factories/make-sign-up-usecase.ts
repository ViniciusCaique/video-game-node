import { DrizzleUserRepository } from "@/modules/users/infrastructure/repositories/drizzle/drizzle-user-repository";
import { SignUpUseCase } from "../usecases/sign-up-usecase";

export function makeSignUpUseCase() {
	const userRepository = new DrizzleUserRepository();

	const signUpUseCase = new SignUpUseCase(userRepository);

	return signUpUseCase;
}
