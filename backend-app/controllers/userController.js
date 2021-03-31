const ApiError = require("../error/apiError");

class UserController {

    async registration(req, res) {
    }

    async login(req, res) {
    }

    // todo change 'check' -> auth
    async check(req, res, next) {
        // req.query = для того щоб дістати дані із юрл  http://localhost:5000/api/user/auth?id=1
        // const {id} = req.query;
        // if (!id){
        //     next(ApiError.badRequest("Forgot ID"));
        // }
        // res.json(id);

        res.json("message");
    }

}

module.exports = new UserController()