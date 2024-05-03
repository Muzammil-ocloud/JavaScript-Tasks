let arr = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]
let result = exp(arr)
console.log(result)
function exp(expArr) {
    let str = ""
    if (Array.isArray(expArr[1])) {

        let result = exp(expArr[1])
        str = str.concat(result)
    }
    else
        str = str.concat(expArr[1] + " ")
    str = str.concat(expArr[0] + " ")
    if (Array.isArray(expArr[2])) {
        let result = exp(expArr[2])
        if (Array.isArray(expArr[2][1]))
            result = "(" + result + ")"
        str = str.concat(result)
    }
    else
        str = str.concat(expArr[2] + " ")

    return str

}


