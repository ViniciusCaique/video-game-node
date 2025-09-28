import { UserRepository } from "@/modules/users/repositories/user-repository";
import { AuthModel } from "../models/auth-model";
import { EmailAlreadyRegistered } from "./_errors/email-already-registered";
import bcrypt from 'bcryptjs'
import { InvalidCredentials } from "./_errors/invalid-credentials";



interface SignInUseCaseRequest {
  data: AuthModel.signInBody
}


export class SignInUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({ data }: SignInUseCaseRequest) {

    const exitingUser = await this.userRepository.findByEmail(data.email)

    if (!exitingUser) {
      throw new InvalidCredentials('Email or password invalid.')
    }

    const doesPasswordMatch = await bcrypt.compare(data.password, exitingUser.password)

    if (!doesPasswordMatch) {
      throw new InvalidCredentials('Email or password invalid.')
    }

    return {
      token: 'fake-jwt-token'
    }
  }
}