const flatService = require("../service/FlatService.js");
const {Flat} = require('../models/models')

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

    async create(req, res, next) {
        try {
            const {
                flat_floor,
                square_all,
                square_living,
                price_month,
                rooms_num,
                balconies_num,
                short_description,
                main_description,
                pledge,
                houseHouseId
            } = req.body;
            const flat = await Flat.create({
                flat_floor,
                square_all,
                square_living,
                price_month,
                rooms_num,
                balconies_num,
                short_description,
                main_description,
                pledge,
                houseHouseId
            });
            return res.json(flat);
        } catch (e) {
            res.status.json(e);
        }
    }

}

module.exports = new FlatController();