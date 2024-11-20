"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/", (req, res) => {
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
