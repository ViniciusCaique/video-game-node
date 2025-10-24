import type { UserRepository } from "@/modules/users/infrastructure/repositories/user-repository";
import bcrypt from "bcryptjs";
import { InvalidCredentials } from "../../../../shared/errors/invalid-credentials";
import type { AuthModel } from "../../domain/auth";

interface SignInUseCaseRequest {
	data: AuthModel.signInBody;
}

export class SignInUseCase {
	constructor(private userRepository: UserRepository) {}

	async execute({ data }: SignInUseCaseRequest) {
		const exitingUser = await this.userRepository.findByEmail(data.email);

		if (!exitingUser) {
			throw new InvalidCredentials("Email or password invalid.");
		}

		const doesPasswordMatch = await bcrypt.compare(
			data.password,
			exitingUser.password,
		);

		if (!doesPasswordMatch) {
			throw new InvalidCredentials("Email or password invalid.");
		}

		return {
			token: "fake-jwt-token",
		};
	}
}
