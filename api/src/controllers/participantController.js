import participant from "../models/Participant.js";
import notFound from "../errors/NotFound.js";
import NotFound from "../errors/NotFound.js";


class ParticipantController {

    static async listParticipant(req, res, next) {

        try {
            const id = req.params.id;
            const listedParticipant = await participant.find(id);
            if (listedParticipant !== null) {
                res.status(200).json(listedParticipant);
            } else {
                next(new notFound("Participants not found! "))
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async listParticipantPerId(req, res, next) {
        try {
            const id = req.params.id
            const foundParticipant = await participant.findById(id);
            if (foundParticipant !== null) {
                res.status(200).json(foundParticipant);
            } else {
                next(new notFound("Participant ID not found!"));
            }
        } catch (erro) {
            next(erro);
        }
    }

    static async registerParticipant(req, res, next) {
        try {
            const newParticipant = await participant.create(req.body);
            res.status(201).json({message: "Participant registered Successfully!", participant: newParticipant});
        } catch (erro) {
            next(erro);
        }
    }

    static async updateParticipant(req, res, next) {
        try {
            const id = req.params.id;
            const participantResult = await participant.findByIdAndUpdate(id, req.body);
            if (participantResult !== null) {
                res.status(200).send({message: "Participant Updated!"});
            } else {
                next(new NotFound("Participant not found!"))
            }

        } catch (erro) {
            next(erro);
        }
    }

    static async deleteParticipant(req, res, next) {
        try {
            const id = req.params.id;
            const participantResult = await participant.findByIdAndDelete(id);
            if (participantResult !== null) {
                res.status(200).send({message: "Participant Removed!"})
            } else {
                next(new notFound("Participant not found!"))
            }
        } catch (erro) {
            next(erro)
        }
    }


}

export default ParticipantController;