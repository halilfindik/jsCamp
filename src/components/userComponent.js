import { BaseLogger, ElasticLogger, MongoLogger} from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Engin", "Demiroğ", "Ankara")
let user2 = new User(2, "Baran", "Gökçekli", "Muğla")

UserService.add(user1)
UserService.add(user2)

console.log(userService.list())


UserService.getById(1)
UserService.list()


let customer = { id: 1, firstName: "Engin" }

//prototyping deniliyor buna; sonradan mevcutta olmayan bir değeri varmış gibi ekleyebiliyorsun
customer.lastName = "Demiroğ"

console.log(customer.lastName)