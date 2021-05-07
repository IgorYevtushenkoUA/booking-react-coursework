const {
    City,
    Region,
    Area,
    Street,
    WallType,
    Heating,
    House,
    Infrastructure,
    HouseHasInfrastructure,
    MetroStation,
    HouseNearMetroStation,
    BathroomType,
    Flat,
    RentType,
    FlatHasRentType,
    HouseholdAppliances,
    FlatHasHouseholdAppliances,
    Multimedia,
    FlatHasMultimedia,
    Comfort,
    FlatHasComfort,
    PeopleType,
    FlatHasPeopleType,
    Rule,
    FlatHasRule,
    FlatImage,
    FlatHasImage
} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")


class FlatService {

    async getAllStreets() {
        console.log("getAllStreets");
        let streets = await Street.findAll();
        return streets;
    }

    async getAll() {
        return await Flat.findAll();
    }


    async getById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        return Flat.findByPk(id);
    }

    async deleteById(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        let sql = "delete from flats where flat_id = " + id;
        connection.query(sql, (e, result) => {
            return result
        });
    }

    async update(flat) {
        if (!flat.flat_id) {
            throw new Error('не указан ID');
        }
        return await Flat.update(flat.flat_id, flat);
    }

    async createFlat(flat) {
        return await Flat.create({...flat});
    }

    async getStreetsByArea(area) {
        let sql = `SELECT * FROM streets AS s INNER JOIN areas AS a`
        // let sql = `SELECT * FROM streets AS s INNER JOIN areas AS a ON a.area_id=s.areaAreaId WHERE a.name='Голосіївський'`
        // let sql = `SELECT * FROM streets AS s INNER JOIN areas AS a ON a.area_id=s.areaAreaId WHERE a.name='${area}'`
        connection.query(sql, (e, result) => {
            console.log(result);
            return result;
        })
    }

    async getAllAreas() {
        return await Area.findAll();
    }

    async getAllCities() {
        return await City.findAll();
    }

    async getAllComforts() {
        return await Comfort.findAll();
    }

    async getAllImages() {
        // return await .findAll();
    }

    async getAllHeatings() {
        return await Heating.findAll();
    }

    async getAllInfrastructures() {
        return await Infrastructure.findAll();
    }

    async getAllPeopleTypes() {
        return await PeopleType.findAll();
    }

    async getAllMultimedias() {
        return await Multimedia.findAll();
    }

    async getAllRegions() {
        return await Region.findAll();
    }

    async getAllRules() {
        return await Rule.findAll();
    }

    async getAllWallTypes() {
        return await WallType.findAll();
    }

    async getAllMetroStations() {
        return await MetroStation.findAll();
    }

    async getHouseByHouseNumAndStreet(house_num, streetId) {
        console.log("getHouseByHouseNumAndStreet : service");
        return await House.findAll({
            where: {
                house_num: house_num,
                streetId: streetId
            }
        });
    }

    async createHouse(house) {
        return await House.create({...house});
    }

    async createHouseHasInfrastructure(houseInfrastructure) {
        return await HouseHasInfrastructure.create({...houseInfrastructure});
    }

    async createFlatHasComfort(flatComfort) {
        return await FlatHasComfort.create({...flatComfort});
    }

    async createFlatHasPeopleType(flatPeopleType) {
        return await FlatHasPeopleType.create({...flatPeopleType});
    }

    async createFlatHasMultimedia(flatMultimedia) {
        return await FlatHasMultimedia.create({...flatMultimedia});
    }

    async createFlatHasRule(flatRule) {
        return await FlatHasRule.create({...flatRule});
    }

    async createFlatHasImage(flatImage) {
        return await FlatHasImage.create({...flatImage});
    }
}

module.exports = new FlatService();
