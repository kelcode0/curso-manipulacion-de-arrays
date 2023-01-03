const words =["spray", "elites", "limit", "apple", "exuberant" ];

const newArray =[];

for (let i = 0; i < words.length; i++) {
    const item = words[i];
    if (item.length >= 6){
        newArray.push(item);

    };
    
};


const array1 = words.filter(item => item.length >= 6);

console.log(newArray);
console.log(array1);

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

const rta3 = order.filter(item => item.delivered && item.total > 180);

const seacrh = (arr) => {
    return order.filter( item =>{
        return item.customerName.includes(arr);
    });

};



