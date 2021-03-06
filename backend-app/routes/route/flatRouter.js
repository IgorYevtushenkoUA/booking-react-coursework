const Router = require("express")
const router = new Router();
const flatController = require("../../controllers/flatController.js");

router.get("/", flatController.getAll);
router.get('/streets', flatController.getAllStreets);
router.get('/areas', flatController.getAllAreas);
router.get('/cities', flatController.getAllCities);
router.get('/comforts', flatController.getAllComforts);
router.get('/images', flatController.getAllImages);
router.get('/heatings', flatController.getAllHeatings);
router.get('/infrastructures', flatController.getAllInfrastructures);
router.get('/peopleTypes', flatController.getAllPeopleTypes);
router.get('/multimedias', flatController.getAllMultimedias);
router.get('/regions', flatController.getAllRegions);
router.get('/rules', flatController.getAllRules);
router.get('/wallTypes', flatController.getAllWallTypes);
router.get('/metro', flatController.getAllMetroStations);
router.get('/house', flatController.getHouseByHouseNumAndStreet);
router.get('/bathroom', flatController.getAllBathroomTypes);
router.get('/householdAppliance', flatController.getHouseHoldAppliances);

router.get('/years_house', flatController.getHouseYears);
router.get('/years_house_min', flatController.getMinHouseYear);
router.get('/years_house_max', flatController.getMaxHouseYear);
router.get('/rooms_flat', flatController.getFlatRooms);
router.get('/rooms_flat_max', flatController.getMaxFlatRoom);
router.get('/rooms_flat_min', flatController.getMinFlatRoom);
router.get('/floors_house', flatController.getHouseFloors);
router.get('/floors_house_min', flatController.getMinHouseFloor);
router.get('/floors_house_max', flatController.getMaxHouseFloor);
router.get('/floors_flats', flatController.getFlatFloors);
router.get('/floors_flats_min', flatController.getMinFlatFloor);
router.get('/floors_flats_max', flatController.getMaxFlatFloor);
router.get('/filter', flatController.loadFlatsByFilter);

router.get('/month_price_max', flatController.getMaxMonthPrice);
router.get('/month_price_min', flatController.getMinMonthPrice);
router.get('/square_all_max', flatController.getMaxSquareAll);
router.get('/square_all_min', flatController.getMinSquareAll);
router.get('/square_living_max', flatController.getMaxSquareLiving);
router.get('/square_living_min', flatController.getMinSquareLiving);
router.get("/flat_data", flatController.getFlatData)
router.get("/flats_first_image", flatController.getFlatsFirstImage)

router.get("/:id", flatController.getById);
router.get("/house/:id", flatController.getHouseById);
router.get("/street/:id", flatController.getStreetById);
router.get("/area/:id", flatController.getAreaById);
router.get("/city/:id", flatController.getCityById);
router.get("/house_data/:id", flatController.getHouseData)
router.get("/flat_data/:id", flatController.getFlatDataById)

router.get("/flat_has_comfort/:id", flatController.getFlatComfort)
router.get("/flat_has_household_appliance/:id", flatController.getFlatHouseholdAppliance)
router.get("/flat_has_multimedia/:id", flatController.getFlatMultimedia)
router.get("/flat_has_people_type/:id", flatController.getFlatPeopleType)
router.get("/flat_has_rule/:id", flatController.getFlatRule)
router.get("/flat_has_image/:id", flatController.getFlatImage)

router.get("/owner_has_flat_data/:accountId", flatController.getOwnerHasFlatData)
router.get("/owner_has_flat_image_url/:accountId", flatController.getOwnerHasFlatImageUrl)
router.get("/client_liked_flat_data/:accountId", flatController.getClientLikedFlatData)
router.get("/client_liked_flat_image_url/:accountId", flatController.getClientLikedFlatImageUrl)

router.post('/image', flatController.createImage);
router.post('/house', flatController.createHouse);
router.post('/house_has_infrastructure', flatController.createHouseHasInfrastructure);
router.post('/house_near_metro_station', flatController.createHouseNearMetroStation);
router.post('/flat', flatController.createFlat);
router.post('/flat_has_household_appliance', flatController.createFlatHasHouseholdAppliance);
router.post('/flat_has_comfort', flatController.createFlatHasComfort);
router.post('/flat_has_people_type', flatController.createFlatHasPeopleType);
router.post('/flat_has_multimedia', flatController.createFlatHasMultimedia);
router.post('/flat_has_rule', flatController.createFlatHasRule);
router.post('/flat_has_image', flatController.createFlatHasImage);



router.delete("/:id", flatController.deleteById);
// router.get("/update-flat/:id")           // get flat to edit by id
// router.post("/update-flat/:id")     // post-update flat by id
// router.delete("/update-flat/:id")   // delete flat by id
// router.post("/create-flat")         // create flat

module.exports = router;