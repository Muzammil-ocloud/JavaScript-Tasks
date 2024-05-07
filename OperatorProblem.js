let arr = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]

console.log(exp(arr))
// function exp(expArr) {
//     let str = ""
//     if (Array.isArray(expArr[1])) {

//         let result = exp(expArr[1])
//         str = str.concat(result)
//     }
//     else
//         str = str.concat(expArr[1] + " ")
//     str = str.concat(expArr[0] + " ")
//     if (Array.isArray(expArr[2])) {
//         let result = exp(expArr[2])
//         if (Array.isArray(expArr[2][1]))
//             result = "(" + result + ")"
//         str = str.concat(result)
//     }
//     else
//         str = str.concat(expArr[2] + " ")

//     return str

// }
function exp(expArr) {
    let str = ""
    var result;
    expArr.forEach((val, i) => {
        switch (i) {
            case 0:
                str = str.concat(val + " ")
                break;
            case 1:
                Array.isArray(val) ? result = exp(val) : result = val + " ";
                str = `${result}${str}`
                break;
            case 2:
                Array.isArray(val) ? result = exp(val) : result = val + " ";
                Array.isArray(val[1]) && Array.isArray(val[2]) ? str = `${str}(${result})` : str = str.concat(result)
                break;
        }
    }
    )
    return str

}


