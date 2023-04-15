import { z } from "zod";

const loginValidationSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
  })
  .required();

export default loginValidationSchema;
