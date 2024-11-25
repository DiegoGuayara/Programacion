import express, { Request, Response } from "express";
import { ResultSetHeader } from "mysql2";
import poolPromise from "./pool";

const PORT = 10101;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  let saludo = [{ saludo: "Hola" }];
  res.json(saludo);
});

app.get("/parametros-consulta", (req: Request, res: Response) => {
  let nombre = req.query.nombre;
  let apellido = req.query.apellido;

  console.log("----", nombre, apellido);
  return res.status(200).json({
    status: "Consulta realizada",
    nombre: nombre,
    apellido: apellido,
  });
});

app.get("/parametros-ruta/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  return res.status(200).json({
    status: "Consulta realizada",
    id: id,
  });
});

app.get("/cabeceras", (req: Request, res: Response) => {
  let cabecera = req.header("Authorization");
  return res.status(200).json({
    status: "Consulta realizada",
    cabecera: cabecera,
  });
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

app.post("/register2", async (req: Request, res: Response) => {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;

  try {
    const pool = await poolPromise;

    if (!pool) {
      throw new Error(
        "No se pudo establecer la conexión con la base de datos."
      );
    }

    const [result] = await pool.query<ResultSetHeader>(
      "INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)",
      [nombre, apellido]
    );

    res.status(200).json({
      status: "Registrado",
      id: result.insertId,
      nombre,
      apellido,
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post("/registerjson", (req: Request, res: Response) => {
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
