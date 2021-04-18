const ApiError = require("../error/apiError");
const userService = require("../service/UserService.js");
const {Role} = require("../models/models");
const {User} = require("../models/models");

class UserController {

    async registration(req, res) {

    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await userService.authByEmailAndPassword(email, password);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async create(req, res) {
        try {
            const {
                first_name,
                second_name,
                birth,
                gender,
                email,
                password,
                phone_num1,
                phone_num2,
                phone_num3,
                passport_ID,
                last_name,
                roleRoleId
            } = req.body;
            const user = await User.create({
                first_name,
                second_name,
                birth,
                gender,
                email,
                password,
                phone_num1,
                phone_num2,
                phone_num3,
                passport_ID,
                last_name,
                roleRoleId
            });
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
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