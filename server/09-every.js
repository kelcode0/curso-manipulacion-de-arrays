const number = [1,23,14,30,23,12];

let rta = true;
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if( element >= 40){
        rta = false;
    }
        
        
}

console.log( rta);

const rta2= number.every(item => item <= 40);

console.log(rta2);

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ]