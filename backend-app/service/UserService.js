const {User} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")

class UserService {

    async getAll() {
        const users = await User.findAll();
        return users;
    }

    async getById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        const users = await User.findByPk(id);
        return users;
    }

    async deleteById(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        let sql = "delete from users where user_id = " + id;
        connection.query(sql, (e, result) => {
            return result
        });
    }

    async authByEmailAndPassword(email, password) {
        const user = User.findAll({
            where: {
                email: email,
                password: password
            }
        });
        return user;
    }

    async registerUser(user) {
        const createdUser = await User.create({...user});
        return createdUser;
    }

    async update(user) {
        if (!user.user_id) {
            throw new Error('не указан ID')
        }
        const updatedUser = await User.update(user.user_id, user);
        return updatedUser;
    }

}

module.exports = new UserService();