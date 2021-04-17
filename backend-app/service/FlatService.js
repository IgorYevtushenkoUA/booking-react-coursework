const {Flat} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")


class FlatService {

    async getAll() {
        const flats = await Flat.findAll();
        return flats;
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


}

module.exports = new FlatService();
