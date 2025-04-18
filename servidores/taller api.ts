import express, { Request, Response } from "express";

const port = 10101;
const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.post("/datos/:domicilio", (req: Request, res: Response) => {
  const { domicilio } = req.params;
  const { cc, nombres, apellidos } = req.query;

  res.status(200).json({
    mensaje: "Los datos ingresados son:",
    domicilio: domicilio,
    cc: cc,
    nombres: nombres,
    apellidos: apellidos,
  });
});

app.post("/articulo/:id/:peso", (req: Request, res: Response) => {
  const { id, peso } = req.params;
  const { ancho, alto } = req.body;

  res.status(200).json({
    mensaje: "Los datos del articulo son:",
    id: id,
    peso: peso,
    ancho: ancho,
    alto: alto,
  });
});

app.delete("/elimUsuario", (req: Request, res: Response) => {
  const { cc } = req.query;
  const id = req.header("id");

  const { motivo } = req.body;

  if (!cc || !id || !motivo) {
    return res.status(400).json({
      error: "Faltan datos requeridos: cc, id o motivo.",
    });
  }

  const mensaje = `El usuario con cc ${cc}, asociado al id ${id}, ha sido eliminado por el siguiente motivo: ${motivo}.`;

  res.status(200).json({
    mensaje: "Usuario eliminado exitosamente.",
    detalles: mensaje,
  });
});

app.put("/actUsuario", (req: Request, res: Response) => {
  const cc = req.query.cc;

  const domicilio = req.header("domicilio");

  const { apellidos } = req.body;

  if (!cc) {
    return res.status(400).json({ error: "El parámetro 'cc' es obligatorio" });
  }

  if (!domicilio) {
    return res
      .status(400)
      .json({ error: "La cabecera 'domicilio' es obligatoria" });
  }

  if (!apellidos) {
    return res
      .status(400)
      .json({ error: "El campo 'apellidos' es obligatorio en el cuerpo" });
  }

  res.status(200).json({
    mensaje: "Usuario actualizado correctamente",
    datosActualizados: {
      cc,
      domicilio,
      apellidos,
    },
  });
});

app.get("/datosArt/:cantidad/:marca", (req: Request, res: Response) => {
  const { precio } = req.query;
  const { cantidad, marca } = req.params;
  const domicilio = req.header("domicilio");

  res.status(200).json({
    mensaje: "Los datos ingresados son:",
    precio: precio,
    cantidad: cantidad,
    marca: marca,
    domicilio: domicilio,
  });
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
