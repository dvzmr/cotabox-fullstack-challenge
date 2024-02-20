import "dotenv/config";
import app from "./src/app.js"

const PORT = 3000;

const routes = {
    "/": "Tela principal - Dashboard",
    "/participants": "Entrei na rota de Participantes"
};

app.listen(PORT, () => {
    console.log("servidor escutando!");
});