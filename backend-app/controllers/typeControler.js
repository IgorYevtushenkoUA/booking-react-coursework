const {Role} = require("../models/models")
const ApiError = require('../error/apiError')

class TypeController {

    async create(req,res){
        const {name} = req.body;
        const type = await Role.create({name})
        return res.json(type)
        // return res.json("message")
    }

    async getAll(req,res){
        const roles = await Role.findAll();
        return res.json(roles);
    }


}

module.exports = new TypeController();