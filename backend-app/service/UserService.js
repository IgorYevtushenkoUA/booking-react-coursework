const {ClientWatchedFlat} = require("../models/models");
const {ClientLikedFlat} = require("../models/models");
const {OwnerHasFlat} = require("../models/models");
const {Account} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")

class UserService {

    async getAll() {
        const users = await Account.findAll();
        return users;
    }

    async getById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        const users = await Account.findByPk(id);
        return users;
    }

    async ownerAddFlat(accountHasFlat){
        return await OwnerHasFlat.create({...accountHasFlat});
    }

    async clientLikedFlat(clientLikedFlat){
        return await ClientLikedFlat.create({...clientLikedFlat});
    }

    async clientWatchedFlat(clientWatchedFlat){
        return await ClientWatchedFlat.create({...clientWatchedFlat});
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
        const user = Account.findAll({
            where: {
                email: email,
                password: password
            }
        });
        return user;
    }

    async registerUser(user) {
        const createdUser = await Account.create({...user});
        return createdUser;
    }

    async update(account) {
        if (!account.account_id) {
            throw new Error('не указан ID')
        }
        const updatedUser = await Account.update(account.account_id, account);
        return updatedUser;
    }

}

module.exports = new UserService();