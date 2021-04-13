const flatService = require("../service/FlatService.js");

class FlatController {

    async getAll(req, res) {
        try {
            const flats = await flatService.getAll();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getById(req, res) {
        try {
            const role = await flatService.getById(req.params.id);
            return res.json(role);
        } catch (e) {
            console.log("error controller")
            res.status(500).json(e);
        }
    }

    async deleteById(req, res) {
        try {
            const flat = await flatService.deleteById(req.params.id);
            return res.json(flat);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async create(req, res) {
        try {
            const flat = await flatService.create(req.body);
            res.json(flat);
        } catch (e) {
            res.status.json(e);
        }
    }

}

module.exports = new FlatController();