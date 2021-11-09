export default class UserService{
    constructor(loggerService){
        this.Users = []
        this.loggerService = loggerService
    }

    add(user) {
        this.Users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u=>u.id ===id)
    }
}