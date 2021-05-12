const Router = require("express")
const router = new Router();
const userController = require("../../controllers/userController")

router.post("/login", userController.login);
router.get("/login", userController.login);
router.get("/owner_has_flat/:id", userController.getOwnerFlat)
router.get("/client_liked_flat/:id", userController.getClientLikedFlat)
router.get("/client_watched_flat/:id", userController.getClientWatchedFlat)


router.post("/register", userController.register)

router.post("/owner_has_flat", userController.ownerAddFlat)
router.post("/client_liked_flat", userController.clientLikedFlat)
router.post("/client_watched_flat", userController.clientWatchedFlat)

// router.post("/registration", userController.registration);
// router.get("/auth", userController.check);

module.exports = router
