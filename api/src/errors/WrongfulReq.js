import BaseError from "./BaseError.js";

class WrongfulReq extends BaseError {
    constructor(mensagem = "Um ou mais dados informados são invalidos") {
        super(mensagem, 400);
    }
}

export default WrongfulReq;