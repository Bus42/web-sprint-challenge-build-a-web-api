// Write your "projects" router here!
const express = require('express');
const projectsRouter = express.Router();
const { get, insert, update, remove } = require('./projects-model');

projectsRouter.get(`/:id`, (req, res) => {
    get(req.params.id)
        .then(project => {
            res.status(200).send(project || []);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.post('/', (req, res) => {
    insert(req.body)
        .then(project => {
            res.status(201).send(project);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.put(`/:id`, (req, res) => {
    update(req.params.id, req.body)
        .then(project => {
            res.status(200).send(project);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.delete(`/:id`, (req, res) => {
    remove(req.params.id)
        .then(project => {
            res.status(200).send(project);
        }).catch(err => res.status(500).send(err))
})

module.exports = projectsRouter;
