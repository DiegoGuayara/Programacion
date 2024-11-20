"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 10101;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    let saludo = [{ saludo: "Hola" }];
    res.json(saludo);
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
app
    .listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
})
    .on("error", (error) => {
    throw new Error(error.message);
});
