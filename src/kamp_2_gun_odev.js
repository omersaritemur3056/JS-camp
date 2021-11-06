/////odev 1: gönderilen sayıların asal sayı olup olmadığını bulma

function findPrime(...numbers) {
    var count = 0
    for (let i = 0; i < numbers.length; i++) {
        

        if (numbers[i] < 1) {
            console.log(numbers[i] + " not a valid number")
            
        }
        
       for (let j = 2; j < numbers[i]; j++) {
           
           if (numbers[i] % j == 0) {
               count++
           }
       }
       if (count >1) {
           console.log(numbers[i] + " is not prime")
           
       }else{
           console.log(numbers[i] + " is prime")
       }
    }
}


findPrime(3,11,45,-2,133,1,999)

/////odev 2: Yazılan iki sayının arkadaş sayı olup olmadığını bulma



function findFriendNumber(number1, number2) {
    let total1 = 0
    let total2 = 0

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1+=i
        }
        
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            total2+=j
        }
        
    }

    if (total2 == number1 && total1 == number2) {
        console.log(number1 + " and " + number2 + " is friend numbers")
    }else{
        console.log(number1 + " and " + number2 + " is not friend numbers")
    }
}

findFriendNumber(220,284)

/////odev 3 : 1000'e kadar tüm mükemmel sayıları listeleyen sayıları bulacağız.

function findPerfectNumbersUpTo1000() {
    for (let i = 1; i <= 1000; i++) {
        let total = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                total += j
            }
        }
        if(total == i*2){
            console.log(i)
        }
        total = 0
    }
}

findPerfectNumbersUpTo1000()



/////odev 4 1000'e kadarki asal sayıları listeleyen sayıları yazacağız

function primeNumbersListUpTo1000()
{
let primeNumberList= []
for (let i = 2; i < 1000; i++) {
 let count = 0
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      count++;
      break
    }
  }
if (count == 0) {
  primeNumberList.push(i)
}

}
console.log("prime numbers :  "+ primeNumberList)


}
primeNumbersListUpTo1000()
