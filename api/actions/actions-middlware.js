const { get } = require("./actions-model");


function verifyRequestBody(req, res, next) {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
        return res.status(400).json({
            error: 'please fill out all required fields'
        });
    } else {
        next();
    }
}

async function verifyId(req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res.status(404).json({
            error: 'id is required'
        });
    }
    await get(id)
        .then(response => {
            return response ? next() : res.status(404).send({ "message": "action with provided id could not be found" })
        })
        .catch(() => {
            res.status(500).send({ "message": "error occured while fetching action" })
        });
}

module.exports = {
    verifyRequestBody,
    verifyId
}