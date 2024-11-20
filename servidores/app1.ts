import express, { Request, Response } from "express";
const PORT = 10101;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  let saludo = [{ saludo: "Hola" }];
  res.json(saludo);
});

app.post("/register", (req: Request, res: Response) => {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;

  return res.status(200).json({
    status: "Registrado",
    nombre: nombre,
    apellido: apellido,
  });
});

app
  .listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
