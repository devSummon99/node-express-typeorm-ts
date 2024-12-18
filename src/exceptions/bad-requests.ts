import { HttoException } from "./";
import { ErrorCode } from "./enum";

export class BadRequestsException extends HttoException {
    constructor(message :string ,errorCode: ErrorCode) {
        super(message, errorCode, 400, null)
    }
}