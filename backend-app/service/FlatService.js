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
const {promisify} = require('util');
const query = promisify(connection.query).bind(connection);


class FlatService {

    async getAllStreets() {
        console.log("getAllStreets");
        let streets = await Street.findAll();
        return streets;
    }

    async getAll() {
        // let flats =  await Flat.findAll();
        // console.log("flats in service");
        // return flats;

        const query = promisify(connection.query).bind(connection);
        let sql = "select * from flats";
        let flats = await query("select * from flats");
        return flats;
    }

    async loadAllFlatTest() {
        let sql = "select * from flats where rooms_num > 1";
        return await query(sql);
    }

//todo
    async loadFlatsByFilter(
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
        squareLivingTo) {
        let sql = "select *\n"+
            "from flats f\n" +
            "         inner join houses h on f.houseId = h.id\n" +
            "         inner join house_has_infrastructures hhi on h.id = hhi.houseId\n" +
            "         inner join house_near_metro_stations hnms on h.id = hnms.houseId\n" +
            "         inner join streets s on h.streetId = s.id\n" +
            "         inner join areas a on s.areaId = a.id\n" +
            "where a.id in (" + areasArr + ")\n" +
            "  and f.rooms_num in (" + roomsArr + ")\n" +
            "  and h.house_year in (" + houseYearsArr + ")\n" +
            "  and h.heatingId in (" + heatingsArr + ")\n" +
            "  and h.wallTypeId in (" + wallTypesArr + ")\n" +
            "  and f.flat_floor in (" + flatFloorsArr + ")\n" +
            "  and hnms.metroStationId in (" + metroStationsArr + ")\n" +
            "  and hhi.infrastructureId in (" + infrastructuresArr + ")\n" +
            "  and f.price_month >= "+ priceFrom +"\n" +
            "  and f.price_month <= "+ priceTo +"\n" +
            "  and f.square_all <= "+ squareAllTo +"\n" +
            "  and f.square_all >= "+ squareAllFrom +"\n" +
            "  and f.square_living >= "+ squareLivingFrom +"\n" +
            "  and f.square_living <= "+ squareLivingTo +"";

        console.log(sql);
        return await query(sql)
    }

    async getHouseYears() {
        let sql = 'select distinct(house_year) as value from houses'
        return await query(sql);
    }

    async getMinHouseYear() {
        let sql = 'select min(house_year) as min from houses'
        return await query(sql);
    }

    async getMaxHouseYear() {
        let sql = 'select max(house_year) as max from houses'
        return await query(sql);
    }

    async getFlatRooms() {
        // const query = promisify(connection.query).bind(connection);
        let sql = 'select distinct(rooms_num) as value from flats'
        return await query(sql);
    }

    async getMaxFlatRoom() {
        let sql = 'select max(rooms_num) as max from flats'
        return await query(sql);
    }

    async getMinFlatRoom() {
        let sql = 'select min(rooms_num) as min from flats'
        return await query(sql);
    }

    async getHouseFloors() {
        let sql = 'select distinct(floors_num) as value from houses'
        return await query(sql);
    }

    async getMinHouseFloor() {
        let sql = 'select min(floors_num) as min from houses'
        return await query(sql);
    }

    async getMaxHouseFloor() {
        let sql = 'select max(floors_num) as max from houses'
        return await query(sql);
    }

    async getFlatFloors() {
        let sql = 'select distinct(flat_floor) as value from flats'
        return await query(sql);
    }

    async getMinFlatFloor() {
        let sql = 'select min(flat_floor) as min from flats'
        return await query(sql);
    }

    async getMaxFlatFloor() {
        let sql = 'select max(flat_floor) as max from flats'
        return await query(sql);
    }

    async getMaxMonthPrice() {
        let sql = 'select max(price_month) as max from flats'
        return await query(sql);
    }

    async getMinMonthPrice() {
        let sql = 'select min(price_month) as min from flats'
        return await query(sql);
    }

    async getMaxSquareAll() {
        let sql = 'select max(square_all) as max from flats'
        return await query(sql);
    }

    async getMinSquareAll() {
        let sql = 'select min(square_all) as min from flats'
        return await query(sql);
    }

    async getMaxSquareLiving() {
        let sql = 'select max(square_living) as max from flats'
        return await query(sql);
    }

    async getMinSquareLiving() {
        let sql = 'select min(square_living) as min from flats'
        return await query(sql);
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

    async getAllBathroomTypes() {
        return await BathroomType.findAll();
    }

    async getHouseHoldAppliances() {
        return await HouseholdAppliances.findAll();
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
