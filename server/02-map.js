const map =['ij','23','ty','er','ds'];

// const newArray = [];

// // for (let i = 0; i < map.length; i++) {
// //     const element = map[i];
// //     newArray.push(element + '++');
// // }

const newArray = map.map( item => item +'++');
console.log(newArray);

const agua = [
    {
     "name": "Product 1",
     "price": 1000,
     "stock": 10
    },
    {
     "name": "Product 2",
     "price": 2000,
     "stock": 20
    }
   ];

   const ner = agua.map(item => {
    return {...item, tax : 19}
   });

   console.log(ner);
