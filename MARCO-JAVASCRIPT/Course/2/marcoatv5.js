//5. Utilizando for, descubra o maior valor contido no array e imprima-o.

const numbers = [5, 9, 3, 19, 70, 8, 100, 1200, 2, 35, 27];
let number = 0

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (number < element) {
      number = element  
    }
}

console.log(number)