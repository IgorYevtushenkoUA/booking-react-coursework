const {
    Flat,
    Street,
    Area,
    City,
    Comfort,
    FlatImage,
    FlatHasImage,
    Heating,
    Infrastructure,
    PeopleType,
    Multimedia,
    Region,
    Rule,
    WallType
} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")


class FlatService {

    async getAllStreets() {
        console.log("getAllStreets");
        let streets = await Street.findAll();
        console.log(streets);
        return streets;
    }

    async getAll() {
        return await Flat.findAll();
    }


    async getById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        const flat = Flat.findByPk(id);
        return flat;
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
        const updatedFlat = await Flat.update(flat.flat_id, flat);
        return updatedFlat;
    }

    async create(flat) {
        const createdFlat = await Flat.create({...flat});
        return createdFlat;
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

}

module.exports = new FlatService();
