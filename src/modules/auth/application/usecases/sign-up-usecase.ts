import type { UserRepository } from "@/modules/users/infrastructure/repositories/user-repository";
import bcrypt from "bcryptjs";
import { EmailAlreadyRegistered } from "../../../../shared/errors/email-already-registered";
import type { AuthModel } from "../../domain/auth";

interface SignUpUseCaseRequest {
	data: AuthModel.signUpBody;
}

export class SignUpUseCase {
	constructor(private userRepository: UserRepository) {}

	async execute({ data }: SignUpUseCaseRequest) {
		const exitingUser = await this.userRepository.findByEmail(data.email);

		if (exitingUser) {
			throw new EmailAlreadyRegistered("Email aready registered.");
		}

		data.password = await bcrypt.hash(data.password, 10);

		const user = await this.userRepository.create(data);

		return {
			user: {
				id: user.id,
			},
		};
	}
}
