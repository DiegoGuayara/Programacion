import express from "express";
import authRoutes from "./routes/auth.routes";
import productRoutes from "./routes/products.routes";

const port = 3000;
const App = express();

App.use(express.json());
App.use(authRoutes);
App.use(productRoutes);

App.listen(port, () => {
  console.log(`Escuchando el puerto ${port}`);
});
