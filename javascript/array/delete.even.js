let arr =[2,1,4,3,5,6]
function deleted(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr[j] = arr[i]
            j++
        }
    }
    arr.length = j
    return arr
}
console.log(deleted(arr))