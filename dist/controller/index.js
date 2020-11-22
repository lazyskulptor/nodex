"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_ctrl_1 = __importDefault(require("./main_ctrl"));
function route(app) {
    app.use('/', main_ctrl_1.default);
}
exports.default = route;
//# sourceMappingURL=index.js.map