import mongoose, {mongo} from "mongoose";

const participantSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {
        type: String, required: [true, "Participant first name is REQUIRED!"]
    },
    lastName: {
        type: String, required: [true, "Participant last name is REQUIRED!"]
    },
    participation: {type: Number, required: [true, "Participation value is REQUIRED!"]}
}, {versionKey: false});

const participant = mongoose.model("participants", participantSchema);

export default participant