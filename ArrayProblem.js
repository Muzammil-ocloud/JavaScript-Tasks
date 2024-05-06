const array = [
    { id: "one", next: "two", value: null },
    { id: "two", next: "three", value: null },
    { id: "three", next: null, value: null },
]


function ArrayProblem(array) {
    let arr1 = [];
    array.reduceRight((acc, curr) => {
        let arr = curr;
        Object.keys(acc).length === 0 ? arr.value = null : arr.value = acc;
        arr1.unshift(arr)
        return arr;
    }, {})
    return arr1;
}
console.log(JSON.stringify(ArrayProblem(array)))