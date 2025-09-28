import { DrizzleUserRepository } from "@/modules/users/repositories/drizzle/drizzle-user-repository";
import { SignInUseCase } from "../sign-in-usecase";



export function makeSignInUseCase() {
  const userRepository = new DrizzleUserRepository()

  const signInUseCase = new SignInUseCase(
    userRepository
  )

  return signInUseCase
}