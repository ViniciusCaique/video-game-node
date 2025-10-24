import { FastifyReply, FastifyRequest } from "fastify";
import { AuthModel } from "../../domain/auth";
import { makeSignInUseCase } from "../../application/factories/make-sign-in-usecase";
import { InvalidCredentials } from "@/shared/errors/invalid-credentials";

export async function signInController(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	try {
		const data = AuthModel.signInBody.parse(request.body);

		const service = makeSignInUseCase();

		const response = await service.execute({ data });

		return reply.status(200).send({ data: response });
	} catch (error) {
		if (error instanceof InvalidCredentials) {
			return reply.status(403).send({ message: error.message });
		}

		throw error;
	}
}
