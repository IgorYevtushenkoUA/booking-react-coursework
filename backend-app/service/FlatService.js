const {Street} = require("../models/models.js");
const {Flat} = require("../models/models.js")
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

}

module.exports = new FlatService();
