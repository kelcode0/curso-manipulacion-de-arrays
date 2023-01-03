const rnput = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]

const rta = rnput.flatMap( item =>  item.split(' ')).length;

const rta3 = rnput.map(item => item.split('b')).flat()

// const rta2 = rnput.split();
console.log(rta3);
