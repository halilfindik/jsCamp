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