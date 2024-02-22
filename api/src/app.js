import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";
import erroHandler from "./middlewares/erroHandler.js";
import handler404 from "./middlewares/handler404.js";

const connection = await connectToDatabase;

connection.on("error", (erro) => {
    console.error("Erro de Conexão", erro);
})

connection.once("open", () => {
    console.log("Conexão com o banco de dados BEM SUCEDIDA.");
})


const app = express();
app.use(cors());
routes(app);

app.use(handler404);

app.use(erroHandler)

export default app