const Router = require("express")
const router = new Router();
const flatController = require("../../controllers/flatController.js");

router.get("/", flatController.getAll)   // get all flat
// router.post("/");                   // search by params
router.get("/:id", flatController.getById)                       // get flat by id
router.delete("/:id", flatController.deleteById)               // delete flat by id -> it for ADMIN
// router.get("/update-flat/:id")           // get flat to edit by id
// router.post("/update-flat/:id")     // post-update flat by id
// router.delete("/update-flat/:id")   // delete flat by id
// router.post("/create-flat")         // create flat

module.exports = router;