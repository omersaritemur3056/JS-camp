function addToCart(quantity, productName="Elma") {
    console.log("sepete eklendi : " + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("Karpuz")

let sayHello = () =>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("elma",5,10)
addToCart2("armut",2,10)
addToCart2("limon",3,15)

function addToCart3(product) {
    console.log("ürün : " + product.productName)
    console.log("adet : " + product.quantity)
    console.log("fiyat : " + product.unitPrice)
}
let product1 = {productName:"Elma", unitPrice:10,quantity:5}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10,quantity:5}
let product3 = {productName:"Elma", unitPrice:10,quantity:5}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)

function addToCart4(products) {
    console.log(products)
}
//fonksiyondaki products ile arraydeki products aynı değildir.
let products = [
    {productName:"Elma", unitPrice:10,quantity:5},
    {productName:"Armut", unitPrice:10,quantity:5},
    {productName:"Karpuz", unitPrice:10,quantity:5}
]

addToCart4(products)

function add(bisey, ...numbers) {
    let total = 0
   for (let i = 0; i < numbers.length; i++) {
       total = total + numbers[i]
   }
   console.log(total)
   console.log(bisey)
}

add(3,5)
//add(3,5,6)
//add(3,5,6,7)

let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))

//let [icAnadolu,marmara] = ["İç Anadolu", "Marmara", "Karadeniz"]

//console.log(icAnadolu)
//console.log(marmara)

/* let [icAnadolu,marmara] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "10M"},
]

console.log(icAnadolu.population)
console.log(marmara.name) */

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population: "20M"},
    {name: "Marmara", population: "30M"},
    {name: "Karadeniz", population: "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

//console.log(icAnadolu.population)
//console.log(marmara.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity} 
=  {productName:"Elma", unitPrice:10,quantity:5})

console.log(newProductName)