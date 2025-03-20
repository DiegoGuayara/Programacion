import mysql from "mysql2/promise";

const connectDB = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "api_database",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log("Conexión exitosa a la base de datos");
    return pool;
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
    setTimeout(connectDB, 5000); // Reconexión automática
  }
};

// No usamos await directamente, sino que asignamos la promesa
const poolPromise = connectDB();

export default poolPromise;
