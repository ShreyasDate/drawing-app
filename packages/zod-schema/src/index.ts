import { z } from "zod";


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .refine((val) => /[A-Z]/.test(val), {
    message: "Password must include at least one uppercase letter",
  })
  .refine((val) => /[^a-zA-Z0-9]/.test(val), {
    message: "Password must include at least one special character",
  });



export const CreateUserSchema= z.object({
    username : z.string().min(3 , {error : "username must be longer than 3 letters"}).max(20 , {error : "username must be shorter than 20 letters"}),

    password : passwordSchema,

    name : z.string().min(3,{error : "name must be longer than 3 letters"}).max(20,{error : "name must be shorter than 20 letters"} )
})


export const SigninSchema = CreateUserSchema.pick({
    username : true,
    password : true
});

export const CreateRoomSchema = z.object({
    RoomName : z.string().min(3,{error : "name must be longer than 3 letters"}).max(20,{error : "name must be shorter than 20 letters"} )
}

)