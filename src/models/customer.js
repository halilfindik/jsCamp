import User from "./user"

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
        this.creditCardNumber = creditCardNumber
    }
}