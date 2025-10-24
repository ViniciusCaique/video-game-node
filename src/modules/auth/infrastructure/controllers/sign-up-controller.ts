import { FastifyReply, FastifyRequest } from "fastify";
import { AuthModel } from "../../domain/auth";
import { makeSignUpUseCase } from "../../application/factories/make-sign-up-usecase";
import { EmailAlreadyRegistered } from "@/shared/errors/email-already-registered";

export async function signUpController(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	try {
		const data = AuthModel.signUpBody.parse(request.body);

		console.log(data);

		const service = makeSignUpUseCase();

		const response = await service.execute({ data });

		return reply.status(200).send({ data: response });
	} catch (error) {
		if (error instanceof EmailAlreadyRegistered) {
			return reply.status(403).send({ message: error.message });
		}

		throw error;
	}
}
