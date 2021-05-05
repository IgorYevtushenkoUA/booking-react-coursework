const Router = require("express")
const router = new Router();
const flatController = require("../../controllers/flatController.js");

router.get("/", flatController.getAll)
router.get('/streets', flatController.getAllStreets)
router.get('/areas', flatController.getAllAreas)
router.get('/cities', flatController.getAllCities)
router.get('/comforts', flatController.getAllComforts)
router.get('/images', flatController.getAllImages)
router.get('/heatings', flatController.getAllHeatings)
router.get('/infrastructures', flatController.getAllInfrastructures)
router.get('/peopleTypes', flatController.getAllPeopleTypes)
router.get('/multimedias', flatController.getAllMultimedias)
router.get('/regions', flatController.getAllRegions)
router.get('/rules', flatController.getAllRules)
router.get('/wallTypes', flatController.getAllWallTypes)

router.get("/:id", flatController.getById)
router.delete("/:id", flatController.deleteById)
router.post('/create', flatController.create)


// router.get("/update-flat/:id")           // get flat to edit by id
// router.post("/update-flat/:id")     // post-update flat by id
// router.delete("/update-flat/:id")   // delete flat by id
// router.post("/create-flat")         // create flat

module.exports = router;