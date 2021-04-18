const ApiError = require("../error/apiError");
const userService = require("../service/UserService.js");
const {Role} = require("../models/models");
const {User} = require("../models/models");
const nodemailer = require("nodemailer");

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

            debugger
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
            await sendEmail();
            console.log("send email")
            debugger
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

const sendEmail = () => {

    console.log("sendEmail method")

    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'igor.yevtushenko.ua@gmail.com',
            pass: 'RDroadtothedream11222000'
        }
    });

    const message = {
        from: 'igor.yevtushenko.ua@gmail.com',
        to: 'i11am22from2000ukraine@gmail.com',
        subject: 'ви отримали повідомлення',
        html: '<h1>Welcome to the Flatty</h1>',
    };
    console.log("SEND EMAIL")
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    })
}

module.exports = new UserController()