import express from "express";
import ParticipantController from "../controllers/participantController.js";

const routes = express.Router();

routes.get("/participants", ParticipantController.listParticipant);
routes.get("/participants/:id", ParticipantController.listParticipantPerId);
routes.post("/participants", ParticipantController.registerParticipant);
routes.put("/participants/:id", ParticipantController.updateParticipant);
routes.delete("/participants/:id", ParticipantController.deleteParticipant);

export default routes;

