import mongoose from "mongoose";
import BaseError from "../errors/BaseError.js"
import WrongfulReq from "../errors/WrongfulReq.js";
import WrongfulValidation from "../errors/WrongfulValidation.js";
import NotFound from "../errors/NotFound.js";

function erroHandler(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        new WrongfulReq().sendResponse(res);
    } else if (erro instanceof mongoose.Error.ValidationError) {
        new WrongfulValidation(erro).sendResponse(res);
    } else if (erro instanceof NotFound) {
        erro.sendResponse(res);

    } else {
        new BaseError().sendResponse(res)
    }
}

export default erroHandler;