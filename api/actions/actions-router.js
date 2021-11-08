const express = require('express');

const actionsRouter = express();
actionsRouter.use(express.json());

const { get, insert, update, remove } = require("./actions-model");
const projectsModel = require("../projects/projects-model");
const { verifyId, verifyRequestBody } = require('./actions-middlware');

actionsRouter.get('/', (req, res) => {
    get()
        .then(actions => {
            res.status(200).send(actions);
        })
        .catch(() => {
            res.status(500).send({ message: 'Failed to get actions' });
        });
})

actionsRouter.get('/:id', verifyId, (req, res) => {
    const id = req.params.id;
    get(id)
        .then(action => {
            res.status(200).send(action);
        })
        .catch(() => {
            res.status(500).send({ message: 'Failed to get action' });
        });
})

actionsRouter.post('/', verifyRequestBody, async (req, res) => {
    const { project_id } = req.body;
    await projectsModel.get(project_id).then(project => {
        if (!project) {
            res.status(404).send({ message: `No project id:${project_id} exists` });
        } else {
            const action = req.body;
            insert(action)
                .then(action => {
                    res.status(201).send(action);
                })
                .catch((err) => {
                    res.status(500).send(err);
                });
        }
    })

})

actionsRouter.put('/:id', verifyId, verifyRequestBody, (req, res) => {
    const id = req.params.id;
    const action = req.body;
    update(id, action)
        .then(response => {
            console.log(response)
            res.status(200).send(response);
        })
        .catch(() => {
            res.status(500).send({ message: 'Failed to update action' });
        });
})

actionsRouter.delete('/:id', verifyId, (req, res) => {
    const id = req.params.id;
    remove(id)
        .then(() => {
            res.status(204).send({ message: 'Action removed' });
        })
        .catch(() => {
            res.status(500).send({ message: 'Failed to remove action' });
        });
})

module.exports = actionsRouter;
