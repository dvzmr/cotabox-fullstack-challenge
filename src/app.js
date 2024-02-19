import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase;

connection.on("error", (erro) => {
    console.error("Erro de Conexão", erro);
})

connection.once("open", () => {
    console.log("Conexão com o banco de dados BEM SUCEDIDA.");
})

const app = express();
routes(app);

export default app