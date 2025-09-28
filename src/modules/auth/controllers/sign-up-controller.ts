import { FastifyReply, FastifyRequest } from "fastify";

import { AuthModel } from "../models/auth-model";
import { EmailAlreadyRegistered } from "../usecases/_errors/email-already-registered";
import { makeSignUpUseCase } from "../usecases/_factories/make-sign-up-usecase";




export async function signUpController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = AuthModel.signUpBody.parse(request.body)

    console.log(data)

    const service = makeSignUpUseCase()

    const response = await service.execute({ data })

    return reply.status(200).send({ data: response })
    
  } catch (error) {
    if (error instanceof EmailAlreadyRegistered) {
      return reply.status(403).send({ message: error.message })
    }

    throw error
  }
}