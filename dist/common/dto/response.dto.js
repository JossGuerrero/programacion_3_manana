"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponseDto = exports.SuccessResponseDto = void 0;
class SuccessResponseDto {
    constructor(message, data) {
        this.success = true;
        this.message = message;
        this.data = data;
    }
}
exports.SuccessResponseDto = SuccessResponseDto;
class ErrorResponseDto {
    constructor(message, statusCode = 500, error) {
        this.success = false;
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
exports.ErrorResponseDto = ErrorResponseDto;
