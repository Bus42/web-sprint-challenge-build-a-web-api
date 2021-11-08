const { get } = require("./projects-model");


function verifyRequestBody(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({
            error: 'name and description are required fields'
        });
    } else {
        next();
    }
}

async function verifyId(req, res, next) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            error: 'id is required'
        });
    } else {
        await get(id)
            .then(response => {
                return response ? next() : res.status(404).send({ "message": "project with provided id could not be found" })
            })
            .catch(() => {
                res.status(500).send({ "message": "error occured while fetching project" })
            });
    }
}

module.exports = {
    verifyRequestBody,
    verifyId
}