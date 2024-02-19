import mongoose, {mongo} from "mongoose";

const participantSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    participation: {type: Number, required: true}
}, {versionKey: false});

const participant = mongoose.model("participants",participantSchema);

export default participant