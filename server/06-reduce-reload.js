const items = [5, 6, 7, 6, 5, 7, 7, 8,1,3,2,9,10,4,8]


const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})

const range = items.reduce((objeto, elemento) => {
    if ( elemento<= 5){
        objeto["1-5"] += 1;
    }else if (objeto["6-8"] <= 8)
    {
        objeto["6-8"]+= 1;
    }else if (objeto["9-10"]<=10) {
        objeto["9-10"]+= 1;

    }
    
    return objeto
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0,
})

console.log(range);

