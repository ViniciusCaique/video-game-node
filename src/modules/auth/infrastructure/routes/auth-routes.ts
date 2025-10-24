import type { FastifyInstance } from "fastify";
import { AuthModel } from "../../domain/auth";
import { signInController } from "../controllers/sign-in-controller";
import { signUpController } from "../controllers/sign-up-controller";

export async function authRoutes(app: FastifyInstance) {
	app.post(
		"/sign-up",
		{
			schema: {
				tags: ["Auth"],
				summary: "Sign Up",
				description: "sign up",
				body: AuthModel.signUpBody,
				response: { 200: AuthModel.signUpResponse },
			},
		},
    signUpController,
	);
	app.post(
		"/sign-in",
		{
			schema: {
				tags: ["Auth"],
				summary: "Sign In",
				body: AuthModel.signInBody,
				response: { 200: AuthModel.signInResponse },
			},
		},
		signInController,
	);
}
