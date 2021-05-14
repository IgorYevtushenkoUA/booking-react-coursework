const userService = require("../service/UserService.js");
const {Account} = require("../models/models");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const generateJwt = (id, roleId) => {
    return jwt.sign(
        {id, roleId},
        process.env.SECRET_KEY,
        {expiresIn: '24h'});
}


class UserController {


    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const user = await Account.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                return next("user with this email doesn`t exists")
            }
            // const user = await user.id, user.roleIduserService.authByEmailAndPassword(email, password);
            let comparePassword = bcrypt.compareSync(password, user.password);
            if (!comparePassword) {
                return next("password incorrect")
            }
            const token = generateJwt(user.id, user.roleId);
            console.log("token" + token)
            return res.json({token});
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async checkToken(req, res) {
        try {
            const {token} = req.body;
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            return res.json(decoded);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async register(req, res, next) {
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
                last_name,
                roleId
            } = req.body;
            // todo check email
            // const candidate = await Account.findOne({where: email});
            // if (candidate) {
            //     return next("candidate exist with this email");
            // }
            const hashPassword = await bcrypt.hash(password, 5);
            const user = await Account.create({
                first_name,
                second_name,
                birth,
                gender,
                email,
                password: hashPassword,
                phone_num1,
                phone_num2,
                phone_num3,
                last_name,
                roleId
            });
            const token = generateJwt(user.id, user.roleId);
            //
            return res.json({token});
            // await sendEmail();
            // return res.json(user);

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

    async getOwnerFlat(req, res) {
        try {
            const ownerFlat = await userService.getOwnerFlat(req.params.id);
            return res.json(ownerFlat);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getClientLikedFlat(req, res) {
        try {
            const clientLikedFlat = await userService.getClientLikedFlat(req.params.id);
            return res.json(clientLikedFlat);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getClientWatchedFlat(req, res) {
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