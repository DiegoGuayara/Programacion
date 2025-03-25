"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const port = 3000;
const App = (0, express_1.default)();
App.use(express_1.default.json());
App.use(auth_routes_1.default);
App.use(products_routes_1.default);
App.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
