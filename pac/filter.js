

let arr = [1, 2, 3, 4]

let func = function(item) {
    return item % 2 === 0;   
}


let narr = arr.filter(func)

console.log(narr)