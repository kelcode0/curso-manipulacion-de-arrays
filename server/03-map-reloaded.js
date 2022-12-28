const order = [
        {
        customerName: "nicolas",
        total:"60",
        delivered: true,
    },
        {
        customerName: "Zulema",   
        total:"120",
        delivered: false,   
    },
        {
        customerName: "Santiago",   
        total:"180",
        delivered: true,   
    },
    

        {
        customerName: "Valentina",   
        total:"240",
        delivered: true,   
    },

    
];

console.log("Original", order);
const rta = order.map(item => item.total);
console.log("Total", rta);

// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);

const rta2 = order.map( item=> {
    return {
        ...item,
        tax : 0.19,
    };

});

console.log(rta2);