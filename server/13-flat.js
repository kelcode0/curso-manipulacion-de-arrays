const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]
  
  const flatArray = []
  
  for(let i=0; i<matrix.length; i++){
    const array = matrix[i]
    for(let j=0; j<array.length; j++){
      flatArray.push(matrix[i][j])
    }
  }
  
  console.log(flatArray)
  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

  const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// simular flat con recursividad

const matrix1 = [
    0,
    [1,2,3],
    [45,3,6,[5,6,5,[1,9]]],
    [3,7,9,[45,88]],
    23,
];

function aplanarMatix(matrix1) {
    let array = [];

    for(let element of matrix1){
        if (Array.isArray(element)) {
             array =array.concat(aplanarMatix(element));
            
        } else{
             array.push(element);
        }
    }

    return array;

};

console.log(aplanarMatix(matrix1));

const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
  );

  console.log(flatten(matrix1));