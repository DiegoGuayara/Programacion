"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email({
        message: "Write a correct email",
    }),
    password: zod_1.z
        .string()
        .nonempty("Password is required")
        .min(6, "Password too short"),
});
const port = 3000;
const App = (0, express_1.default)();
App.use(express_1.default.json());
App.post("/", (req, res) => {
    try {
        const result = loginSchema.parse(req.body);
        console.log(result);
        res.send("Login");
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res
                .status(400)
                .json(error.issues.map((issue) => ({ message: issue.message })));
        }
        res.status(500).json({
            message: "Internal server error",
        });
    }
});
App.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
