import { UserRepository } from "@/modules/users/repositories/user-repository";
import { AuthModel } from "../models/auth-model";
import { EmailAlreadyRegistered } from "./_errors/email-already-registered";
import bcrypt from 'bcryptjs'



interface SignUpUseCaseRequest {
  data: AuthModel.signUpBody
}


export class SignUpUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({ data }: SignUpUseCaseRequest) {

    const exitingUser = await this.userRepository.findByEmail(data.email)

    if (exitingUser) {
      throw new EmailAlreadyRegistered('Email aready registered.')
    }

    data.password = await bcrypt.hash(data.password, 10)

    const user = await this.userRepository.create(data)

    return {
      user: {
        id: user.id
      }
    }
  }
}