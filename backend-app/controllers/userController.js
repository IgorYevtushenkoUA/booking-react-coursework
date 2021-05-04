const ApiError = require("../error/apiError");
const userService = require("../service/UserService.js");
const {Role} = require("../models/models");
const {Account} = require("../models/models");
const nodemailer = require("nodemailer");

class UserController {

    async login(req, res) {
        try {
            const {email, password} = req.body;
            console.log("email : '" + email + "'")
            console.log("password : '" + password + "'");
            const user = await userService.authByEmailAndPassword(email, password);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async register(req, res) {
        try {
            debugger
            console.log("we are here to register :: 1")
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
                last_name,
                roleRoleId
            } = req.body;
            console.log("we are here to register :: 2")
            const user = await Account.create({
                first_name,
                second_name,
                birth,
                gender,
                email,
                password,
                phone_num1,
                phone_num2,
                phone_num3,
                last_name,
                roleRoleId
            });
            // await sendEmail();
            console.log(user);
            console.log("send email");
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
            pass: 'password'
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