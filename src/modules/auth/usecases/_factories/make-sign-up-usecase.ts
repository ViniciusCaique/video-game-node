import { DrizzleUserRepository } from "@/modules/users/repositories/drizzle/drizzle-user-repository";
import { SignUpUseCase } from "../sign-up-usecase";



export function makeSignUpUseCase() {
  const userRepository = new DrizzleUserRepository()

  const signUpUseCase = new SignUpUseCase(
    userRepository
  )

  return signUpUseCase
}