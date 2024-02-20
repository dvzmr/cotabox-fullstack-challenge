import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import cors from "cors";

const connection = await connectToDatabase;

connection.on("error", (erro) => {
    console.error("Erro de Conexão", erro);
})

connection.once("open", () => {
    console.log("Conexão com o banco de dados BEM SUCEDIDA.");
})



const app = express();
app.use(cors());


// app.use((req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });
//
// // // Express routes
// // app.get('/participants', (req, res) => {});
routes(app);


export default app