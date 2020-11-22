"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const SESSION_NAME = 'web_session';
const SESSION_SECRET = 'M8johDaJqAqm';
const MAX_AGE = 24 * 60 * 6 * 1000;
module.exports = (app) => {
    app.use(cors_1.default({
        origin: "http://127.0.0.1:8080",
        credentials: true
    }));
    app.use(helmet_1.default());
    app.use(cookie_parser_1.default());
    app.use(express_session_1.default({
        name: SESSION_NAME,
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: MAX_AGE }
    }));
};
//# sourceMappingURL=secure.js.map