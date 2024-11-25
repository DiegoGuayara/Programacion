"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pool_1 = __importDefault(require("./pool"));
const PORT = 10101;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    let saludo = [{ saludo: "Hola" }];
    res.json(saludo);
});
app.get("/parametros-consulta", (req, res) => {
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    console.log("----", nombre, apellido);
    return res.status(200).json({
        status: "Consulta realizada",
        nombre: nombre,
        apellido: apellido,
    });
});
app.get("/parametros-ruta/:id", (req, res) => {
    let id = req.params.id;
    return res.status(200).json({
        status: "Consulta realizada",
        id: id,
    });
});
app.get("/cabeceras", (req, res) => {
    let cabecera = req.header("Authorization");
    return res.status(200).json({
        status: "Consulta realizada",
        cabecera: cabecera,
    });
});
app.post("/register", (req, res) => {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    return res.status(200).json({
        status: "Registrado",
        nombre: nombre,
        apellido: apellido,
    });
});
app.post("/register2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    try {
        const pool = yield pool_1.default;
        if (!pool) {
            throw new Error("No se pudo establecer la conexión con la base de datos.");
        }
        const [result] = yield pool.query("INSERT INTO usuarios (nombre, apellido) VALUES (?, ?)", [nombre, apellido]);
        res.status(200).json({
            status: "Registrado",
            id: result.insertId,
            nombre,
            apellido,
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}));
app.post("/registerjson", (req, res) => {
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
