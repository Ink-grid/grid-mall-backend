/** @format */

// Register module/require aliases
import 'module-alias/register';

// Patches
import { inject, errorHandler } from 'express-custom-error';
inject(); // Patch express in order to use async / await syntax

// import graphql
import GraphHTTP from 'express-graphql';

// import { Server } from 'http';
import env from 'mandatoryenv';
import express from 'express';
import morgan from 'morgan';
// Getting base GraphQL Schema
import schema from './graphql/schema';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';

//import logger from '@util/logger';

// Load .env Enviroment Variables to process.env

env.load(['DB_URL', 'PORT', 'SECRET']);

const { PORT } = process.env;

// Instantiate an Express Application

const app = express();

// prueba shema
app.use(cors());
// use Graphql
app.use(
	'/graphql/inkmarket',
	GraphHTTP({
		graphiql: true,
		schema: schema
	})
);

// Configure Express App Instance
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Configure custom logger middleware
//app.use(logger.dev, logger.combined);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(helmet());

// This middleware adds the json header to every response
app.use('*', (req, res, next) => {
	res.setHeader('Content-Type', 'application/json');
	next();
});

// Assign Routes
import router from './routes/router';
app.use('/api/rest', router);

// Handle errors
app.use(errorHandler());

// Handle not valid route
app.use('*', (req, res) => {
	res.status(404).json({ status: false, message: 'Endpoint Not Found' });
});

// Open Server on configurated Port
// const server = app;

app.listen(PORT, () => console.info('Server listening on port ', PORT));

// let io = require('socket.io')(server);
//
// io.on('connection', socket => {
// console.log('new client connectes');
// socket.emit('FromAPI', { info: 'wordkhjhjhhgfg' });
// socket.on('disconnect', function() {
// console.log('Cliente desconectado');
// });
// });
