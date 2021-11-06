function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi : " + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)


let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2 = function(){
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("elma",5,10)
addToCart2("armut",2,10)
addToCart2("limon",3,15)
//objeler önemli
let product1 = {productName:"elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Birim Fiyat : " + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"elma",unitPrice:10,quantity:5}
let product3 = {productName:"elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName= "Karpuz"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}
 //array yaptık ama daha ziyade obje gelir
 //fonksiyondaki product ile array olan product ayrı dünya
let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:10,quantity:5},
    {productName:"karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

/// rest operatörü ...değişken  diye yazarız fonksiyon parantezi içine
/// rest operatörü fonkisyonunun en sonuna yazılır.
function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
        
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
//add(20,30,40)
//add(20,30,40,50)

///spread için verilen array değerini ...değişken şeklinde fonksiyonda yazmak
let numbers = [30,10,500,600,120]
console.log(...numbers)
//console.log(Math.max(...numbers))

//destructring 
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
{name:"İç Anadolu", population:"20M"},
{name:"Marmara", population:"30M"},
{name:"Karadeniz", population:"10M"}, 
    [
    ["Ankara","Konya"],
    ["İstanbul","Bursa"],
    ["Sinop","Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(marmara.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
    ={productName:"elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

