// Reverse an array without using the built-in reverse() method.
let arr =[1,2,3,4,5]
function a(arr){
    let result = []
    for(let i= arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result
}

console.log(a(arr))

//expected output = [ 5, 4, 3, 2, 1 ]
