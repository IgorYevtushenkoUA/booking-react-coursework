const Router = require("express")
const router = new Router();
const flatController = require("../../controllers/flatController.js");

router.get("/", flatController.getAll)
router.get('/streets', flatController.getAllStreets)


router.get("/:id", flatController.getById)
router.delete("/:id", flatController.deleteById)
router.post('/create', flatController.create)



// router.get("/update-flat/:id")           // get flat to edit by id
// router.post("/update-flat/:id")     // post-update flat by id
// router.delete("/update-flat/:id")   // delete flat by id
// router.post("/create-flat")         // create flat

module.exports = router;