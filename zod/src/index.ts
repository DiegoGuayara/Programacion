import express, { Request, Response } from "express";
import { z, ZodError } from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Write a correct email",
  }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password too short"),
});

const port = 3000;
const App = express();
App.use(express.json());

App.post("/", (req: Request, res: Response) => {
  try {
    const result = loginSchema.parse(req.body);
    console.log(result);
    res.send("Login");
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json(error.issues.map((issue) => ({ message: issue.message })));
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
});

App.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
