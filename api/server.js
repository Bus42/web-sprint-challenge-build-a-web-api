const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');
require('dotenv').config();


const middleware = [morgan('dev'), helmet()];
const server = express();

server.use(middleware);
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
