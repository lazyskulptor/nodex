"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const secure_1 = __importDefault(require("./config/secure"));
const configure_1 = __importDefault(require("./config/configure"));
const controller_1 = __importDefault(require("./controller"));
dotenv_1.default.config();
const port = process.env.SERVER_PORT; // default port to listen
const app = express_1.default();
secure_1.default(app);
configure_1.default(app);
controller_1.default(app);
// start the Express server
app.listen(port, () => {
    console.info(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map