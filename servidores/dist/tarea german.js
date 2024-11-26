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
const app = (0, express_1.default)();
let port = 3000;
app.use(express_1.default.json());
let promesa1 = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let bool = true;
            if (bool) {
                resolve("Promesa 1 resuelta");
            }
            else {
                reject("Fallo de ejecucion");
            }
        }, t);
    });
};
let promesa2 = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let bool = true;
            if (bool) {
                resolve("Promesa 2 resuelta");
            }
            else {
                reject("Fallo de ejecucion");
            }
        }, t);
    });
};
let promesa3 = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let bool = true;
            if (bool) {
                resolve("Promesa 3 resuelta");
            }
            else {
                reject("Fallo de ejecucion");
            }
        }, t);
    });
};
app.get("", (req, res) => {
    res.json({
        saludo: "Hola",
    });
});
app.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield Promise.all([
            promesa1(1000),
            promesa2(1100),
            promesa3(1200),
        ]);
        res.json({
            mensaje: "Operaciones completas",
            promesas: result,
        });
    }
    catch (error) {
        res.status(500).json({
            mensaje: `Hubo un fallo al obtener los datos`,
        });
    }
}));
app.get("/race", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield Promise.race([
            promesa1(1000),
            promesa2(1100),
            promesa3(1200),
        ]);
        res.json({
            mensaje: "La primera promesa en cumplirse fue",
            promesa: result,
        });
    }
    catch (error) {
        res.status(500).json({
            mensaje: `Hubo un fallo al obtener los datos`,
        });
    }
}));
app.post("/race2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let t = req.body.t;
    let t2 = req.body.t2;
    let t3 = req.body.t3;
    try {
        let result = yield Promise.race([promesa1(t), promesa2(t2), promesa3(t3)]);
        res.json({
            mensaje: "La primera promesa en cumplirse fue",
            promesa: result,
        });
    }
    catch (error) {
        res.status(500).json({
            mensaje: `Hubo un fallo al obtener los datos`,
        });
    }
}));
app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
