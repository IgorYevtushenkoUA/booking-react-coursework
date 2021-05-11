const Router = require("express")
const router = new Router();
const userController = require("../../controllers/userController")

router.post("/login", userController.login);
router.get("/login", userController.login);
router.post("/register", userController.register)
router.post("/owner_has_flat", userController.ownerAddFlat)
router.post("/client_liked_flat", userController.clientLikedFlat)
router.post("/client_watched_flat", userController.clientWatchedFlat)

// router.post("/registration", userController.registration);
// router.get("/auth", userController.check);

module.exports = router
