import "dotenv/config";
import app from "./src/app.js"

const port = process.env.PORT || 3000;

const routes = {
    "/": "Tela principal - Dashboard",
    "/participants": "Entrei na rota de Participantes"
};

app.listen(port, () => {
    console.log("servidor escutando!");
});