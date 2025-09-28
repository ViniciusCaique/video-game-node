import z, { email } from "zod/v4";


export namespace AuthModel {

  export const signUpBody = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    password: z.string().min(6).max(255)
  })

  export const signUpResponse = z.object({
    data: z.object({
      user: z.object({
        id: z.string(),
      }),
    })
  })

  export type signUpBody = z.infer<typeof signUpBody>
	export type signUpResponse = z.infer<typeof signUpResponse>

  export const signInBody = z.object({
    email: z.email(),
    password: z.string().min(6).max(255)
  })

  export const signInResponse = z.object({
    data: z.object({
      token: z.string(),
    })
  })

  export type signInBody = z.infer<typeof signInBody>
	export type signInResponse = z.infer<typeof signInResponse>
}