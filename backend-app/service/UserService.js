const {ClientWatchedFlat} = require("../models/models");
const {ClientLikedFlat} = require("../models/models");
const {OwnerHasFlat} = require("../models/models");
const {Account} = require("../models/models.js")
const {connection} = require("../database/dbConnector.js")
const {promisify} = require('util');
const query = promisify(connection.query).bind(connection);

class UserService {

    async getAll() {
        const users = await Account.findAll();
        return users;
    }


    async getOwnerFlat(id) {
        let sql = "select a.id as accountId, f.id as flatId\n" +
            "from accounts a\n" +
            "         inner join owner_has_flats o on a.id = o.accountId\n" +
            "         inner join flats f on o.flatId = f.id\n" +
            "where a.id =" + id;
        return await query(sql);
    }

    async getClientLikedFlat(id) {
        let sql = "select a.id as accountId, f.id as flatId\n" +
            "from accounts a\n" +
            "         inner join client_liked_flats o on a.id = o.accountId\n" +
            "         inner join flats f on o.flatId = f.id\n" +
            "where a.id =" + id;
        return await query(sql);
    }

    async getClientWatchedFlat(id) {
        let sql = "select a.id as accountId, f.id as flatId\n" +
            "from accounts a\n" +
            "         inner join client_has_seen_flats o on a.id = o.accountId\n" +
            "         inner join flats f on o.flatId = f.id\n" +
            "where a.id =" + id;
        return await query(sql);
    }


    async getById(id) {
        if (!id) {
            throw new Error('е указан ID')
        }
        const users = await Account.findByPk(id);
        return users;
    }

    async ownerAddFlat(accountHasFlat) {
        return await OwnerHasFlat.create({...accountHasFlat});
    }

    async clientLikedFlat(clientLikedFlat) {

        return await ClientLikedFlat.create({...clientLikedFlat});
    }

    async clientWatchedFlat(clientWatchedFlat) {
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