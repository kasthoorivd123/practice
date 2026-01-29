let arr =[2,3,4,2,3,5,7,18,9]
function remove(arr){
    let unique =[]
    for(let i=0;i<arr.length;i++){
        let isDuplicate = false
        for(let j = 0;j<unique.length;j++){
            if(arr[i] == unique[j]){
                isDuplicate = true
                break
            }
        }
        if(!isDuplicate){
            unique.push(arr[i])
        }
    }
    return unique
}
console.log(remove(arr))

//expected output
// [
//   2,  3, 4, 5,
//   7, 18, 9
// ]

