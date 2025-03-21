import createError from "http-errors";

export class HttpException {
  static forbidden(msg?: string) {
    return createError(403, msg || "Forbidden");
  }

  static unprocessableEntity(msg?: string) {
    return createError(422, msg || "Unprocessable entity");
  }
}
