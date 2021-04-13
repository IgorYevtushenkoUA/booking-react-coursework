const {Role} = require("../models/models");
const ApiError = require('../error/apiError');
const {connection} = require("../database/dbConnector.js");


class TypeController {

    async create(req, res) {
        const {name} = req.body;
        const type = await Role.create({name})
        return res.json(type)
        // return res.json("message")
    }

    async getAll(req, res) {
        const roles = await Role.findAll();
        console.log(roles)
        return res.json(roles);
    }

    async delete(req, res) {
        let sql = `delete from roles where role_id = ${req.params.id}`;
        connection.query(sql, (err, result) => {
            return res.json(result);
        });

    }
}

module.exports = new TypeController();