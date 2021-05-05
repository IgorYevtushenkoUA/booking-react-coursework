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

    async getAllStreets(req, res) {
        try {
            let streets;
            if (req.query.area == null) {
                streets = await flatService.getAllStreets();
            } else {
                console.log("getStreetsByArea")
                streets = await flatService.getStreetsByArea(req.query.area);
            }
            return res.json(streets)

        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getStreetsByArea(req, res) {
        try {
            const streets = await flatService.getStreetsByArea(req.params.area);
            return res.json(streets)
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllAreas(req, res){
        try {
            const flats = await flatService.getAllAreas();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllCities(req, res){
        try {
            const flats = await flatService.getAllCities();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllComforts(req, res){
        try {
            const flats = await flatService.getAllComforts();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllImages(req, res){
        try {
            const flats = await flatService.getAllImages();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllHeatings(req, res){
        try {
            const flats = await flatService.getAllHeatings();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllInfrastructures(req, res){
        try {
            const flats = await flatService.getAllInfrastructures();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllPeopleTypes(req, res){
        try {
            const flats = await flatService.getAllPeopleTypes();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllMultimedias(req, res){
        try {
            const flats = await flatService.getAllMultimedias();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllRegions(req, res){
        try {
            const flats = await flatService.getAllRegions();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllRules(req, res){
        try {
            const flats = await flatService.getAllRules();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllWallTypes(req, res){
        try {
            const flats = await flatService.getAllWallTypes();
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

module.exports = new FlatController();