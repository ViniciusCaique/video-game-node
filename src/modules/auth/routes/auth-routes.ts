
import { App } from "@/server";
import { signUpController } from "../controllers/sign-up-controller";
import { signInController } from "../controllers/sign-in-controller";
import { AuthModel } from "../models/auth-model";



export async function authRoutes(app: App) {
  app.post('/sign-up', { schema: { tags: ['Auth'], summary: 'Sign Up', body: AuthModel.signUpBody, response: { 200: AuthModel.signUpResponse } } }, signUpController)
  app.post('/sign-in', { schema: { tags: ['Auth'], summary: 'Sign In', body: AuthModel.signInBody, response: { 200: AuthModel.signInResponse } } }, signInController)
}