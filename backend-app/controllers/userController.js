const userService = require("../service/UserService.js");
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

    async ownerAddFlat(req, res) {
        try {
            const ownerHasFlat = {
                accountId: req.body.accountId,
                flatId: req.body.flatId
            };
            const ohf = await userService.ownerAddFlat(ownerHasFlat);
            return res.json(ohf);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async clientLikedFlat(req, res) {
        try {
            const clientLikedFlat = {
                accountId: req.body.accountId,
                flatId: req.body.flatId
            };
            const clf = await userService.clientLikedFlat(clientLikedFlat);
            return res.json(clf);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async clientWatchedFlat(req, res) {
        try {
            const clientWatchedFlat = {
                accountId: req.body.accountId,
                flatId: req.body.flatId
            };
            const cwf = await userService.clientWatchedFlat(clientWatchedFlat);
            return res.json(cwf);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOwnerFlat(req, res){
        try {
            const ownerFlat = await userService.getOwnerFlat(req.params.id);
            return res.json(ownerFlat);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getClientLikedFlat(req, res){
        try {
            const clientLikedFlat = await userService.getClientLikedFlat(req.params.id);
            return res.json(clientLikedFlat);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getClientWatchedFlat(req, res){
        try {
            const clientWatchedFlat = await userService.getClientWatchedFlat(req.params.id);
            return res.json(clientWatchedFlat);
        } catch (e) {
            res.status(500).json(e);
        }
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