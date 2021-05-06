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

    async getAllAreas(req, res) {
        try {
            const areas = await flatService.getAllAreas();
            return res.json(areas);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllCities(req, res) {
        try {
            const cities = await flatService.getAllCities();
            return res.json(cities);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllComforts(req, res) {
        try {
            const comforts = await flatService.getAllComforts();
            return res.json(comforts);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllImages(req, res) {
        try {
            const images = await flatService.getAllImages();
            return res.json(images);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllHeatings(req, res) {
        try {
            const heatings = await flatService.getAllHeatings();
            return res.json(heatings);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllInfrastructures(req, res) {
        try {
            const infrastructures = await flatService.getAllInfrastructures();
            return res.json(infrastructures);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllPeopleTypes(req, res) {
        try {
            const peopleTypes = await flatService.getAllPeopleTypes();
            return res.json(peopleTypes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllMultimedias(req, res) {
        try {
            const multimedias = await flatService.getAllMultimedias();
            return res.json(multimedias);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllRegions(req, res) {
        try {
            const regions = await flatService.getAllRegions();
            return res.json(regions);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllRules(req, res) {
        try {
            const rules = await flatService.getAllRules();
            return res.json(rules);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllWallTypes(req, res) {
        try {
            const wallTypes = await flatService.getAllWallTypes();
            return res.json(wallTypes);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAllMetroStations(req, res) {
        try {
            const metro = await flatService.getAllMetroStations();
            return res.json(metro);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getHouseByHouseNumAndStreet(req, res) {
        try {
            console.log("getHouseByHouseNumAndStreet")
            console.log("req.body.params")
            console.log(req.query);
            const {house_num, streetId} = req.query;
            console.log("house_num : " + house_num)
            console.log("streetId : " + streetId)
            const house = await flatService.getHouseByHouseNumAndStreet(house_num, streetId);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

module.exports = new FlatController();