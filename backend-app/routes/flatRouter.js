const Router = require("express")
const router = new Router();
const flatController = require("../controllers/flatController");

router.post("/"); // create flat
router.get("/")
router.get("/:id")


module.exports = router;