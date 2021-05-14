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
    Image,
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
        let sql = "select *\n" +
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
            "  and f.price_month >= " + priceFrom + "\n" +
            "  and f.price_month <= " + priceTo + "\n" +
            "  and f.square_all <= " + squareAllTo + "\n" +
            "  and f.square_all >= " + squareAllFrom + "\n" +
            "  and f.square_living >= " + squareLivingFrom + "\n" +
            "  and f.square_living <= " + squareLivingTo + "";

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

    async getHouseById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        return House.findByPk(id);
    }

    async getHouseData(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        let sql = 'select h.id, s.name as street, a.name as area, r.name as region, c.name as city\n' +
            'from houses h\n' +
            'inner join streets s on h.streetId = s.id\n' +
            'inner join areas a on s.areaId = a.id\n' +
            'inner join regions r on a.regionId = r.id\n' +
            'inner join cities c on r.cityId = c.id\n' +
            'where h.id = ' + id;
        return await query(sql);
    }

    async getFlatComfort(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        let sql = 'select f.id                as flat_id,\n' +
            '       c.id                as id,\n' +
            '       c.name              as name\n' +
            'from flats f\n' +
            '         inner join flat_has_comforts fhc on f.id = fhc.flatId\n' +
            '         inner join comforts c on fhc.comfortId = c.id\n' +
            'where f.id = ' + id;
        return await query(sql);
    }

    async getFlatHouseholdAppliance(id) {
        if (!id) throw new Error('не указан ID')
        let sql = 'select f.id                as flat_id,\n' +
            '       ha.id                as id,\n' +
            '       ha.name              as name\n' +
            'from flats f\n' +
            'inner join flat_has_household_appliances fhha on f.id = fhha.flatId\n' +
            'inner join household_appliances ha on fhha.householdApplianceId = ha.id\n' +
            'where f.id = ' + id;
        return await query(sql);
    }

    async getFlatMultimedia(id) {
        if (!id) throw new Error('не указан ID')
        let sql = 'select f.id                as flat_id,\n' +
            '       m.id                as id,\n' +
            '       m.name              as name\n' +
            'from flats f\n' +
            '       inner join flat_has_multimedias fhm on f.id = fhm.flatId\n' +
            '       inner join multimedias m on fhm.multimediaId = m.id\n' +
            'where f.id =' + id;
        return await query(sql);
    }

    async getFlatPeopleType(id) {
        if (!id) throw new Error('не указан ID')
        let sql = 'select f.id    as flat_id,\n' +
            '       pt.id   as id,\n' +
            '       pt.name as name\n' +
            'from flats f\n' +
            '         inner join flat_has_people_types fhpt on f.id = fhpt.flatId\n' +
            '         inner join people_types pt on fhpt.peopleTypeId = pt.id\n' +
            'where f.id =' + id;
        return await query(sql);
    }

    async getFlatRule(id) {
        if (!id) throw new Error('не указан ID')
        let sql = 'select f.id   as flat_id,\n' +
            '       r.id   as id,\n' +
            '       r.name as name\n' +
            'from flats f\n' +
            '         inner join flat_has_rules fhr on f.id = fhr.flatId\n' +
            '         inner join rules r on fhr.ruleId = r.id\n' +
            'where f.id =' + id;
        return await query(sql);
    }

    async getFlatImage(id) {
        if (!id) throw new Error('не указан ID')
        let sql = 'select f.id   as flat_id,\n' +
            '       i.id   as id,\n' +
            '       i.name as name\n' +
            'from flats f\n' +
            '         inner join flat_has_images fhi on f.id = fhi.flatId\n' +
            '         inner join images i on fhi.imageId = i.id\n' +
            'where f.id = ' + id;
        return await query(sql);
    }

    async getFlatData() {
        let sql = 'select f.id                as flat_id,\n' +
            '       f.flat_floor        as flat_floor,\n' +
            '       f.square_all        as square_all,\n' +
            '       f.square_living     as square_living,\n' +
            '       f.price_month       as price_month,\n' +
            '       f.rooms_num         as rooms_num,\n' +
            '       f.balconies_num     as balconies_num,\n' +
            '       f.short_description as short_description,\n' +
            '       f.updatedAt         as updatedAt,\n' +
            '       f.createdAt         as createdAt,\n' +
            '       h.id                as house_id,\n' +
            '       h.floors_num        as house_floors,\n' +
            '       h.house_year        as house_year,\n' +
            '       h.floors_num        as floors_num,\n' +
            '       h.house_num         as house_num,\n' +
            '       h2.name             as heating_name,\n' +
            '       s.name              as street_name,\n' +
            '       a.name              as area_name,\n' +
            '       r.name              as region_name,\n' +
            '       c.name              as city_name\n' +
            'from flats f\n' +
            '         inner join houses h on h.id = f.houseId\n' +
            '         inner join heatings h2 on h.heatingId = h2.id\n' +
            '         inner join streets s on h.streetId = s.id\n' +
            '         inner join areas a on s.areaId = a.id\n' +
            '         inner join regions r on a.regionId = r.id\n' +
            '         inner join cities c on r.cityId = c.id';
        return await query(sql);
    }


    async getFlatDataById(id) {
        let sql = 'select f.id                as flat_id,\n' +
            '       f.flat_floor        as flat_floor,\n' +
            '       f.square_all        as square_all,\n' +
            '       f.square_living     as square_living,\n' +
            '       f.price_month       as price_month,\n' +
            '       f.rooms_num         as rooms_num,\n' +
            '       f.balconies_num     as balconies_num,\n' +
            '       f.short_description as short_description,\n' +
            '       f.main_description  as main_description,\n' +
            '       f.updatedAt         as updatedAt,\n' +
            '       f.createdAt         as createdAt,\n' +
            '       h.id                as house_id,\n' +
            '       f.flat_floor        as flat_floor,\n' +
            '       h.house_year        as house_year,\n' +
            '       h.floors_num        as floors_num,\n' +
            '       h.house_num         as house_num,\n' +
            '       h2.name             as heating_name,\n' +
            '       s.name              as street_name,\n' +
            '       a.name              as area_name,\n' +
            '       r.name              as region_name,\n' +
            '       c.name              as city_name,\n' +
            '       a2.email            as account_email,\n' +
            '       a2.first_name       as account_first_name,\n' +
            '       a2.second_name      as account_second_name,\n' +
            '       a2.last_name        as account_last_name,\n' +
            '       a2.phone_num1       as account_phone_num1,\n' +
            '       bt.name             as bathroom_type_name,\n' +
            '       ms.name             as metro_station_name,\n' +
            '       ms.line_color       as line_color\n' +
            'from flats f\n' +
            '         inner join houses h on h.id = f.houseId\n' +
            '         inner join heatings h2 on h.heatingId = h2.id\n' +
            '         inner join streets s on h.streetId = s.id\n' +
            '         inner join areas a on s.areaId = a.id\n' +
            '         inner join regions r on a.regionId = r.id\n' +
            '         inner join cities c on r.cityId = c.id\n' +
            '         inner join owner_has_flats ohf on f.id = ohf.flatId\n' +
            '         inner join accounts a2 on ohf.accountId = a2.id\n' +
            '         inner join bathroom_types bt on f.bathroomTypeId = bt.id\n' +
            '         inner join house_near_metro_stations hnms on h.id = hnms.houseId\n' +
            '         inner join metro_stations ms on hnms.metroStationId = ms.id\n' +
            'where f.id = ' + id;
        return await query(sql);
    }

    async getOwnerHasFlatData(accountId) {
        let sql = "select f.id                as flat_id,\n" +
            "       f.flat_floor        as flat_floor,\n" +
            "       f.square_all        as square_all,\n" +
            "       f.square_living     as square_living,\n" +
            "       f.price_month       as price_month,\n" +
            "       f.rooms_num         as rooms_num,\n" +
            "       f.balconies_num     as balconies_num,\n" +
            "       f.short_description as short_description,\n" +
            "       f.main_description  as main_description,\n" +
            "       f.updatedAt         as updatedAt,\n" +
            "       f.createdAt         as createdAt,\n" +
            "       h.id                as house_id,\n" +
            "       f.flat_floor        as flat_floor,\n" +
            "       h.house_year        as house_year,\n" +
            "       h.floors_num        as floors_num,\n" +
            "       h.house_num         as house_num,\n" +
            "       h2.name             as heating_name,\n" +
            "       s.name              as street_name,\n" +
            "       a.name              as area_name,\n" +
            "       r.name              as region_name,\n" +
            "       c.name              as city_name,\n" +
            "       bt.name             as bathroom_type_name,\n" +
            "       ms.name             as metro_station_name,\n" +
            "       ms.line_color       as line_color\n" +
            "from flats f\n" +
            "         inner join houses h on h.id = f.houseId\n" +
            "         inner join heatings h2 on h.heatingId = h2.id\n" +
            "         inner join streets s on h.streetId = s.id\n" +
            "         inner join areas a on s.areaId = a.id\n" +
            "         inner join regions r on a.regionId = r.id\n" +
            "         inner join cities c on r.cityId = c.id\n" +
            "         inner join owner_has_flats ohf on f.id = ohf.flatId\n" +
            "         inner join accounts account on ohf.accountId = account.id\n" +
            "         inner join bathroom_types bt on f.bathroomTypeId = bt.id\n" +
            "         inner join house_near_metro_stations hnms on h.id = hnms.houseId\n" +
            "         inner join metro_stations ms on hnms.metroStationId = ms.id\n" +
            "where account.id=" + accountId;
        return await query(sql);
    }

    async getOwnerHasFlatImageUrl(accountId) {
        let sql = "select f.id   as flatId,\n" +
            "       i.id   as imageId,\n" +
            "       i.name as imageName\n" +
            "from accounts a\n" +
            "         inner join owner_has_flats ohf on a.id = ohf.accountId\n" +
            "         inner join flats f on ohf.flatId = f.id\n" +
            "         inner join flat_has_images fhi on f.id = fhi.flatId\n" +
            "         inner join images i on fhi.imageId = i.id\n" +
            "where a.id = " + accountId + "\n" +
            "group by f.id"
        return await query(sql);
    }

    async getClientLikedFlatImageUrl(accountId) {
        let sql = "select f.id   as flatId,\n" +
            "       i.id   as imageId,\n" +
            "       i.name as imageName\n" +
            "from accounts a\n" +
            "         inner join client_liked_flats clf on a.id = clf.accountId\n" +
            "         inner join flats f on clf.flatId = f.id\n" +
            "         inner join flat_has_images fhi on f.id = fhi.flatId\n" +
            "         inner join images i on fhi.imageId = i.id" +
            "where a.id = " + accountId + "\n" +
            "group by f.id"
        return await query(sql);
    }

    async getStreetById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        return Street.findByPk(id);
    }

    async getAreaById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        return Area.findByPk(id);
    }

    async getCityById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        return City.findByPk(id);
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

    async createHouseNearMetroStation(houseNearMetroStation) {
        console.log("createHouseNearMetroStation : service")
        return await HouseNearMetroStation.create({...houseNearMetroStation});
    }

    async createFlatHasHouseholdAppliance(flatHouseholdAppliance) {
        return await FlatHasHouseholdAppliances.create({...flatHouseholdAppliance});
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

    async createImage(flatImage) {
        return await Image.create({...flatImage});
    }

}

module.exports = new FlatService();
