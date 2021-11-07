const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const projectsRouter = require('./api/projects/projects-router');
// const actionsRouter = require('./api/actions/actions-router');
require('dotenv').config();


const middleware = [express.json(), morgan('dev'), helmet()];
const port = process.env.PORT || 9000;
const app = express();

app.use(middleware);
app.use('/api/projects', projectsRouter);
// app.use('/api/actions', actionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`.yellow.bold);
});
