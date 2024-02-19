import participant from "../models/Participant.js";


class ParticipantController {

    static async listParticipant(req, res) {
        try {
            const id = req.params.id;
            const listedParticipant = await participant.find(id);
            res.status(200).json(listedParticipant);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
    }

    static async listParticipantPerId(req, res) {
        try {
            const id = req.params.id
            const foundParticipant = await participant.findById(id);
            res.status(200).json(foundParticipant);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na requisição`});
        }
    }

    static async registerParticipant(req, res) {
        try {
            const newParticipant = await participant.create(req.body);
            res.status(201).json({message: "criado com sucesso", participant: newParticipant});
        } catch (erro){
            res.status(500).json({message: `${erro.message} - Falha ao cadastrar participante!`});
        }
    }

    static async updateParticipant(req, res) {
        try{
            const id = req.params.id;
            await participant.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Participante atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Falha na atualização!`});
        }
    }

    static async deleteParticipant(req, res) {
        try{
            const id = req.params.id;
            await participant.findByIdAndDelete(id);
            res.status(200).send("Participante excluído com sucesso!");
        }   catch(erro) {
            res.status(500).json({message: `${erro.message} - Falha ao excluido participante!`});
        }
    }



}

export default ParticipantController;