import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", (req: Request, res: Response) => {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;

  return res.status(200).json({
    status: "Registrado",
    nombre: nombre,
    apellido: apellido,
  });
});

const PORT = process.env.PORT || 10101;

app
  .listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
