let arr =[1,2,2,3,4,5,4,5]
let a =[]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;i++){
        if(arr[i]!=arr[j] && arr[i]%2!=0){
             a.push(arr[i])
        }
    }
}
console.log(a) 