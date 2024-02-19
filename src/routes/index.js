import express from "express";
import participants from "./participantsRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Cotabox Challenge fullstack"));

    app.use(express.json(), participants);
};

export default routes;