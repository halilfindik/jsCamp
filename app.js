console.log("Merhaba Kodlama.io")

//js type safe değildir
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10

}

console.log(dolarDun)
//const - Constant
const euroDun = 11.2
//euroDun = 11 // sabit olduğu için değiştirilemiyor.

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")



console.log(konutKredileri)
//(Java & React) Yazılım Geliştirici Yetiştirme Kampı 10. Gün JavaScript & ES6
let sayi1 = 10
sayi1 = "Halil Fındık"
console.log(sayi1)

let student = {id:1, name:"Halil"}

function save(student) {
    console.log(student)
}

save(student)

let students = ["Halil Fındık", "Hakan Fındık", "Esra Fındık", "Burak Fındık"]

console.log(students)

let students2 = [student,{id:2, name:"Hakan"},"Ankara", {city:"İstanbul"}]

console.log(students2)

//rest - 
//params (C#)
//varArgs (Java)
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
showProducts(10,"Elma","Armut","Karpuz")

//rest'in spread versiyon
// elimizdeki bir arrayi ayrıştırıyoruz
let points = [1,2,3,4,5,20,30,60,50]
console.log("1",points)
console.log("1.1",Math.max(points))
console.log("2",...points)
console.log("2.1",Math.max(points))
console.log("2.2",Math.max(...points))

console.log(..."ABC","D",..."EFG","H")

// Destructuring (React'te çok yaygın kullanılıyor)
// Elinizdeki bir arrayin değerlerini değişkenlere atama yöntemi

let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,veryHigh,maximum] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name1:"İçecek"}
console.log(category.id)
console.log(category.name1)

let {id,name1} = category
console.log(id)
console.log(name1)
