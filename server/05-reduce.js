const array = [1,3,2,3];

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) 

const numbers1 = [5,4,8,6,2]

const reducedValue = numbers1.reduce((suma, number) => suma + number**2)

console.log(reducedValue)