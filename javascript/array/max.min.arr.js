// Find the maximum and minimum value in an array.
let arr =[2,1,4,-1,3,6,7,10,5]
let max = -Infinity
let min = Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max= arr[i]
    }else if(arr[i]<min){
        min = arr[i]
    }
}
console.log(max)
console.log(min)

//expected output => 10,-1