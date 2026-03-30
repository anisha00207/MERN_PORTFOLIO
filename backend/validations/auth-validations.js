const { z } = require("zod");

const contactschema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 chars" })
    .max(20, { message: "name must be at most 20 chars" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least 3 chars" })
    .max(50, { message: "email must be at most 50 chars" }),

  message: z
    .string({ required_error: "Message is required" })
    .trim(),

  
});

const testimonialSchema = z.object({
  Name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 chars" })
    .max(20, { message: "name must be at most 20 chars" }),

    Designation: z
    .string({ required_error: "designation is required" })
    .trim()
    .min(3, { message: "designation must be at least 3 chars" }),

  SocialMediaLink: z
  .string()
  .trim()
  .refine(
    (val) => val === "" || /^https?:\/\/.+/.test(val),
    { message: "Enter a valid URL or leave it empty" }
  ),

  Review: z
    .string({ required_error: "Review is required" })
    .trim()
    .min(3, { message: "review must have at least 10 chars" })
    .max(250, { message: "review must have less than  250 chars" })

  
});



const loginschema=z.object({
 email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least 3 chars" })
    .max(50, { message: "email must be at most 50 chars" }),
     password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "password must have at least 7 chars" })
    .max(20, { message: "password must be at most 20 chars" }),

});

const signupschema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be at least 3 chars" })
    .max(20, { message: "name must be at most 20 chars" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be at least 3 chars" })
    .max(50, { message: "email must be at most 50 chars" }),

  phone: z
    .string({ required_error: "phone number is required" })
    .trim()
    .min(10, { message: "phone number must be at least 10 digits" })
    .max(15, { message: "phone number must be at most 15 digits" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "password must have at least 7 chars" })
    .max(20, { message: "password must be at most 20 chars" }),
});


module.exports = {signupschema, loginschema,contactschema,testimonialSchema};

