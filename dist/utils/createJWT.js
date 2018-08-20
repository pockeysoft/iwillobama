"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var createJWT = function (id) {
    var token = jsonwebtoken_1.default.sign({
        id: id
    }, process.env.JWT_TOKEN || '');
    return token;
};
exports.default = createJWT;
//# sourceMappingURL=createJWT.js.map