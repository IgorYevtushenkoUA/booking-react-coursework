const Router = require("express")
const router = new Router();
const userController = require("../../controllers/userController")

router.post("/login", userController.login);
router.get("/login", userController.login);
router.post("/create", userController.create)
// router.post("/registration", userController.registration);
// router.get("/auth", userController.check);

module.exports = router
