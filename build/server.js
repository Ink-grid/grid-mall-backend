"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Register module/require aliases
require("module-alias/register");
// Patches
var express_custom_error_1 = require("express-custom-error");
express_custom_error_1.inject(); // Patch express in order to use async / await syntax
// import graphql
var express_graphql_1 = __importDefault(require("express-graphql"));
// import { Server } from 'http';
var mandatoryenv_1 = __importDefault(require("mandatoryenv"));
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
// Getting base GraphQL Schema
var schema_1 = __importDefault(require("./graphql/schema"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
//import logger from '@util/logger';
// Load .env Enviroment Variables to process.env
mandatoryenv_1.default.load(['DB_URL', 'PORT', 'SECRET']);
var PORT = process.env.PORT;
// Instantiate an Express Application
var app = express_1.default();
// prueba shema
// use Graphql
app.use('/graphql/inkmarket', express_graphql_1.default({
    graphiql: true,
    schema: schema_1.default
}));
// Configure Express App Instance
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Configure custom logger middleware
//app.use(logger.dev, logger.combined);
app.use(morgan_1.default('dev'));
app.use(cookie_parser_1.default());
app.use(cors_1.default());
app.use(helmet_1.default());
// This middleware adds the json header to every response
app.use('*', function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});
// Assign Routes
var router_1 = __importDefault(require("./routes/router"));
app.use('/api/rest', router_1.default);
// Handle errors
app.use(express_custom_error_1.errorHandler());
// Handle not valid route
app.use('*', function (req, res) {
    res.status(404).json({ status: false, message: 'Endpoint Not Found' });
});
// Open Server on configurated Port
// const server = app;
app.listen(PORT, function () { return console.info('Server listening on port ', PORT); });
// let io = require('socket.io')(server);
//
// io.on('connection', socket => {
// console.log('new client connectes');
// socket.emit('FromAPI', { info: 'wordkhjhjhhgfg' });
// socket.on('disconnect', function() {
// console.log('Cliente desconectado');
// });
// });
