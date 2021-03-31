class UserController {

    async registration(req,res){    }

    async login(req,res){    }

    // todo change 'check' -> auth
    async check(req,res){
        let query = req.query
        res.json(query)
    }

}

module.exports = new UserController()