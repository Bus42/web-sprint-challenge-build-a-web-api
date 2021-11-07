// Write your "projects" router here!
const express = require('express');
const { verifyRequestBody, verifyId } = require('./projects-middleware');
const { get, insert, update, remove } = require('./projects-model');

const projectsRouter = express.Router();

function omitActions(project) {
    const pureProject = { ...project };
    delete pureProject.actions;
    return pureProject;
}

projectsRouter.use(express.json());

projectsRouter.get(`/`, (req, res) => {
    get()
        .then(projects => {
            res.status(200).send(projects || []);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.get(`/:id`, verifyId, (req, res) => {
    get(req.params.id)
        .then(project => {
            res.status(200).send(omitActions(project));
        }).catch(err => res.status(500).send(err))
})

projectsRouter.get(`/:id/actions`, verifyId, (req, res) => {
    get(req.params.id)
        .then(project => {
            res.status(200).send(project.actions || []);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.post('/', verifyRequestBody, (req, res) => {
    insert(req.body)
        .then(project => {
            res.status(201).send(project);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.put(`/:id`, verifyId, verifyRequestBody, (req, res) => {
    update(req.params.id, req.body)
        .then(project => {
            res.status(200).send(project);
        }).catch(err => res.status(500).send(err))
})

projectsRouter.delete(`/:id`, verifyId, (req, res) => {
    remove(req.params.id)
        .then(() => {
            res.status(200).end();
        }).catch(err => res.status(500).send(err))
})

module.exports = projectsRouter;
