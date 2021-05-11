const flatService = require("../service/FlatService.js");

class FlatController {

    async getAll(req, res) {
        try {
            console.log("before service")
            const flats = await flatService.getAll();
            console.log("after service")
            return res.json(flats);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async loadFlatsByFilter(req, res) {
        try {
            console.log("loadFlatsByFilter")
            let areasArr = !!req.query.areasArr ? req.query.areasArr : " select id from areas ",
                roomsArr = !!req.query.roomsArr ? req.query.roomsArr : " select distinct(rooms_num) from flats ",
                houseYearsArr = !!req.query.houseYearsArr ? req.query.houseYearsArr : " select distinct(house_year) from houses ",
                wallTypesArr = !!req.query.wallTypesArr ? req.query.wallTypesArr : " select id from wall_types ",
                heatingsArr = !!req.query.heatingsArr ? req.query.heatingsArr : " select id from heatings ",
                flatFloorsArr = !!req.query.flatFloorsArr ? req.query.flatFloorsArr : " select distinct(flat_floor) from flats ",
                metroStationsArr = !!req.query.metroStationsArr ? req.query.metroStationsArr : " select id from metro_stations ",
                infrastructuresArr = !!req.query.infrastructuresArr ? req.query.infrastructuresArr : " select id from infrastructures ",
                priceFrom = req.query.priceFrom,
                priceTo = req.query.priceTo,
                squareAllTo = req.query.squareAllTo,
                squareAllFrom = req.query.squareAllFrom,
                squareLivingFrom = req.query.squareLivingFrom,
                squareLivingTo = req.query.squareLivingTo;
            console.log(areasArr,)
            console.log(roomsArr,)
            console.log(houseYearsArr,)
            console.log(wallTypesArr,)
            console.log(heatingsArr,)
            console.log(flatFloorsArr,)
            console.log(metroStationsArr,)
            console.log(infrastructuresArr)
            console.log(priceFrom,)
            console.log(priceTo,)
            console.log(squareAllTo,)
            console.log(squareAllFrom,)
            console.log(squareLivingFrom,)
            console.log(squareLivingTo)
            const flats = await flatService.loadFlatsByFilter(
                areasArr,
                roomsArr,
                houseYearsArr,
                wallTypesArr,
                heatingsArr,
                flatFloorsArr,
                metroStationsArr,
                infrastructuresArr,
                priceFrom,
                priceTo,
                squareAllTo,
                squareAllFrom,
                squareLivingFrom,
                squareLivingTo
            );
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
            res.status(500).json(e);
        }
    }

    async getHouseById(req, res) {
        try {
            const role = await flatService.getHouseById(req.params.id);
            return res.json(role);
        } catch (e) {
            res.status(500).json(e);
        }
    }


    async getHouseData(req, res) {
        try {
            const houseData = await flatService.getHouseData(req.params.id);
            return res.json(houseData);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatComfort(req, res) {
        try {
            const flatHasComfort = await flatService.getFlatComfort(req.params.id);
            return res.json(flatHasComfort);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatHouseholdAppliance(req, res) {
        try {
            const flatHouseholdAppliance = await flatService.getFlatHouseholdAppliance(req.params.id);
            return res.json(flatHouseholdAppliance);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatMultimedia(req, res) {
        try {
            const flatMultimedia = await flatService.getFlatMultimedia(req.params.id);
            return res.json(flatMultimedia);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatPeopleType(req, res) {
        try {
            const flatPeopleType = await flatService.getFlatPeopleType(req.params.id);
            return res.json(flatPeopleType);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatRule(req, res) {
        try {
            const flatRule = await flatService.getFlatRule(req.params.id);
            return res.json(flatRule);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatImage(req, res) {
        try {
            const flatImage = await flatService.getFlatImage(req.params.id);
            return res.json(flatImage);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatData(req, res) {
        try {
            const flatData = await flatService.getFlatData();
            return res.json(flatData);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatDataById(req, res) {
        try {
            const role = await flatService.getFlatDataById(req.params.id);
            return res.json(role);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getStreetById(req, res) {
        try {
            const role = await flatService.getStreetById(req.params.id);
            return res.json(role);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAreaById(req, res) {
        try {
            const role = await flatService.getAreaById(req.params.id);
            return res.json(role);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getCityById(req, res) {
        try {
            const role = await flatService.getCityById(req.params.id);
            return res.json(role);
        } catch (e) {
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

    async getHouseYears(req, res) {
        try {
            return res.json(await flatService.getHouseYears())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinHouseYear(req, res) {
        try {
            return res.json(await flatService.getMinHouseYear())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxHouseYear(req, res) {
        try {
            return res.json(await flatService.getMaxHouseYear())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getHouseFloors(req, res) {
        try {
            return res.json(await flatService.getHouseFloors())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinHouseFloor(req, res) {
        try {
            return res.json(await flatService.getMinHouseFloor())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxHouseFloor(req, res) {
        try {
            return res.json(await flatService.getMaxHouseFloor())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatRooms(req, res) {
        try {
            return res.json(await flatService.getFlatRooms())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxFlatRoom(req, res) {
        try {
            return res.json(await flatService.getMaxFlatRoom())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinFlatRoom(req, res) {
        try {
            return res.json(await flatService.getMinFlatRoom())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFlatFloors(req, res) {
        try {
            return res.json(await flatService.getFlatFloors())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinFlatFloor(req, res) {
        try {
            return res.json(await flatService.getMinFlatFloor())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxFlatFloor(req, res) {
        try {
            return res.json(await flatService.getMaxFlatFloor())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxMonthPrice(req, res) {
        try {
            return res.json(await flatService.getMaxMonthPrice())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinMonthPrice(req, res) {
        try {
            return res.json(await flatService.getMinMonthPrice())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxSquareAll(req, res) {
        try {
            return res.json(await flatService.getMaxSquareAll())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinSquareAll(req, res) {
        try {
            return res.json(await flatService.getMinSquareAll())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMaxSquareLiving(req, res) {
        try {
            return res.json(await flatService.getMaxSquareLiving())
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getMinSquareLiving(req, res) {
        try {
            return res.json(await flatService.getMinSquareLiving())
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
            const createdHouse = await flatService.createHouse(house);
            return res.json(createdHouse);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createHouseHasInfrastructure(req, res) {
        try {
            const houseInfrastructure = {
                houseId: req.body.houseId,
                infrastructureId: req.body.infrastructureId
            };
            const house = await flatService.createHouseHasInfrastructure(houseInfrastructure);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createHouseNearMetroStation(req, res) {
        try {
            const houseNearMetroStation = {
                distance: 1,
                houseId: req.body.houseId,
                metroStationId: req.body.metroStationId
            };
            console.log("req.body.houseId: " + req.body.houseId)
            console.log("req.body.metroStationId: " + req.body.metroStationId)
            console.log("createHouseNearMetroStation : Constructor")
            const house = await flatService.createHouseNearMetroStation(houseNearMetroStation);
            return res.json(house);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createFlatHasHouseholdAppliance(req, res) {
        try {
            const flatHouseholdAppliance = {
                flatId: req.body.flatId,
                householdApplianceId: req.body.householdApplianceId
            };
            const flatHasHouseholdAppliance = await flatService.createFlatHasHouseholdAppliance(flatHouseholdAppliance);
            return res.json(flatHasHouseholdAppliance);
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

    async createImage(req, res) {
        try {
            const flatImage = {
                name: req.body.name,
            };
            const image = await flatService.createImage(flatImage);
            return res.json(image);
        } catch (e) {
            res.status(500).json(e);
        }
    }


}

module.exports = new FlatController();