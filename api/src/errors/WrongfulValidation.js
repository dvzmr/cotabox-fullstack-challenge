import WrongfulReq from "./WrongfulReq.js";

class WrongfulValidation extends WrongfulReq {
    constructor(erro) {
        const errorMessage = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");
        super(`The following errors were found: ${errorMessage}`);
    }
}

export default WrongfulValidation