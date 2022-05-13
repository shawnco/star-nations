const Account = require('../functions/account');
const getAll = async (req, res) => {
    const result = await Account.getAll();
    res.send({ result });
};

const get = async (req, res) => {
    const result = await Account.get(req.params.id);
    res.send({ result });
};

const create = async (req, res) => {
    const result = await Account.create(req.body);
    res.send({ result });
};

module.exports = app => {
    const router = require('express').Router();
    router.get('/all', getAll);
    router.get('/:id', get);
    router.post('/', create);
    app.use('/api/account', router);
};