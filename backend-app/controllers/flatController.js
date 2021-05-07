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

    async createFlat(req, res) {
        try {
            const flat = {
                flat_floor: req.body.flat_floor,
                square_all: req.body.square_all,
                square_living: req.body.square_living,
                price_month: req.body.price_month,
                rooms_num: req.body.rooms_num,
                balconies_num: req.body.balconies_num,
                short_description: req.body.short_description,
                main_description: req.body.main_description,
                pledge: req.body.pledge,
                houseId: req.body.houseId,
                bathroomTypeId: req.body.bathroomTypeId
            };

            console.log("flat : ")
            console.log(flat);
            const createdFlat = await flatService.createFlat(flat);
            return res.json(createdFlat);
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
    async getAllBathroomTypes(req, res) {
        try {
            const bathroom = await flatService.getAllBathroomTypes();
            return res.json(bathroom);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getHouseHoldAppliances(req, res) {
        try {
            const householdAppliance = await flatService.getHouseHoldAppliances();
            return res.json(householdAppliance);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getHouseByHouseNumAndStreet(req, res) {
        try {
            const {house_num, streetId} = req.query;
            const house = await flatService.getHouseByHouseNumAndStreet(house_num, streetId);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createHouse(req, res) {
        try {
            const house = {
                house_num: req.body.house_num,
                house_year: req.body.house_year,
                floors_num: req.body.floors_num,
                streetId: req.body.streetId,
                wallTypeId: req.body.wallTypeId,
                heatingId: req.body.heatingId
            };
            console.log(house);
            debugger
            const createdHouse = await flatService.createHouse(house);
            return res.json(createdHouse);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createHouseHasInfrastructure(req, res) {
        try {
            const houseInfrastructure = {
                house_num: req.body.house_num,
                streetId: req.body.streetId
            };
            const house = await flatService.createHouseHasInfrastructure(houseInfrastructure);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasComfort(req, res) {
        try {
            const flatComfort = {
                flatId: req.body.flatId,
                comfortId: req.body.comfortId
            };
            const house = await flatService.createFlatHasComfort(flatComfort);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasPeopleType(req, res) {
        try {
            const flatPeopleType = {
                flatId: req.body.flatId,
                peopleTypeId: req.body.peopleTypeId
            };
            const house = await flatService.createFlatHasPeopleType(flatPeopleType);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasMultimedia(req, res) {
        try {
            const flatMultimedia = {
                flatId: req.body.flatId,
                multimediaId: req.body.multimediaId
            };
            const house = await flatService.createFlatHasMultimedia(flatMultimedia);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasRule(req, res) {
        try {
            const flatRule = {
                flatId: req.body.flatId,
                ruleId: req.body.ruleId
            };
            const house = await flatService.createFlatHasRule(flatRule);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasImage(req, res) {
        try {
            const flatImage = {
                flatId: req.body.flatId,
                imageId: req.body.imageId
            };
            const house = await flatService.createFlatHasImage(flatImage);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

}

module.exports = new FlatController();