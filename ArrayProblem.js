const array = [
    { id: "three", next: "four", value: null },
    { id: "one", next: "two", value: null },
    { id: "two", next: "three", value: null },
    { id: "four", next: null, value: null }
]

// function ArrayProblem2(array) {
//     let array1 = [].concat(array)
//     let arr1 = [];
//     var prev = null;
//     while (array1.length > 0) {
//         array1.forEach((arr, i) => {
//             if (arr.next === null) {
//                 arr1.unshift(arr)
//                 prev = arr;
//                 array1.splice(i, 1);

//             }
//             else if (arr.next === prev?.id) {
//                 let arr2 = arr;
//                 arr2.value = prev;
//                 prev = arr2;
//                 arr1.unshift(arr2)
//                 array1.splice(i, 1);
//             }

//         }
//         )
//     }
//     return arr1;

// }


// function ArrayProblem(array) {
//     let arr1 = [];
//     array.reduceRight((acc, curr) => {
//         let arr = curr;
//         Object.keys(acc).length === 0 ? arr.value = null : arr.value = acc;
//         arr1.unshift(arr)
//         return arr;
//     }, {})
//     return arr1;
// }

function ArrayProblem3(array) {
    var prev = [{ id: null }];
    let newArray = array.map(() => {
        let newArr1 = array.filter(item => {
            return item.next === prev[0].id;
        });
        if (prev[0].id !== null)
            newArr1[0].value = prev[0];
        prev = [].concat(newArr1[0]);
        return newArr1[0];
    }
    )
    return newArray.toReversed();
}
console.log(JSON.stringify(ArrayProblem3(array)))
