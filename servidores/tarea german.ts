import express, { Request, Response } from "express";

const app = express();
let port = 3000;
app.use(express.json());

let promesa1 = (t: number) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      let bool: boolean = false;

      if (bool) {
        resolve("Promesa 1 resuelta");
      } else {
        reject("Fallo de ejecucion de la promesa 1");
      }
    }, t);
  });
};

let promesa2 = (t: number) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      let bool: boolean = false;

      if (bool) {
        resolve("Promesa 2 resuelta");
      } else {
        reject("Fallo de ejecucion de la promesa 2");
      }
    }, t);
  });
};

let promesa3 = (t: number) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      let bool: boolean = false;

      if (bool) {
        resolve("Promesa 3 resuelta");
      } else {
        reject("Fallo de ejecucion de la promesa 3");
      }
    }, t);
  });
};

const acPromesas = async (promise: Promise<string>) => {
  try {
    const valor = await promise;
    return { status: "resolved", valor };
  } catch (error) {
    return { status: "rejected", error };
  }
};

app.get("/", (req: Request, res: Response) => {
  res.json({
    saludo: "Hola",
  });
});

app.get("/all", async (req: Request, res: Response) => {
  try {
    let result = await Promise.all([
      promesa1(1000),
      promesa2(1100),
      promesa3(1200),
    ]);
    res.json({
      mensaje: "Operaciones completas",
      promesas: result,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error,
    });
  }
});

app.get("/all2", async (req: Request, res: Response) => {
  try {
    const result = await Promise.all([
      acPromesas(promesa1(1000)),
      acPromesas(promesa2(1100)),
      acPromesas(promesa3(1200)),
    ]);

    const promesasResueltas = result.filter((x) => x.status === "resolved");
    const promesasRechazadas = result.filter((x) => x.status === "rejected");

    res.json({
      mensaje: "Operaciones completadas parcialmente",
      promesas_cumplidas: promesasResueltas.map((x) => x.valor),
      promesas_fallidas: promesasRechazadas.map((x) => x.error),
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error inesperado",
      error,
    });
  }
});

app.get("/race", async (req: Request, res: Response) => {
  try {
    let result = await Promise.race([
      promesa1(1000),
      promesa2(1100),
      promesa3(1200),
    ]);
    res.json({
      mensaje: "La primera promesa en cumplirse fue",
      promesa: result,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error,
    });
  }
});

app.post("/race2", async (req: Request, res: Response) => {
  let t = req.body.t;
  let t2 = req.body.t2;
  let t3 = req.body.t3;
  try {
    let result = await Promise.race([promesa1(t), promesa2(t2), promesa3(t3)]);
    res.json({
      mensaje: "La primera promesa en cumplirse fue",
      promesa: result,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: error,
    });
  }
});

app.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
