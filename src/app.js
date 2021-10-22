console.log("Merhaba Kodlama.io")

//JS Type safe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}


console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 hata verdi böyle yazılınca

console.log(euroDun)
//array
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu komut kredisi","Özel konut kredisi"]
//isimlendirmeyi arraylerde çoğul yaparız ve camelCase yazarız
console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
    
}
console.log("</ul>")

console.log(konutKredileri)

//let users = getUsersFromAPI şeklinde veriler alacağız mesela

//react sayesinde veriyi front end olarak basacağız. JD'den alırlar veriyi

