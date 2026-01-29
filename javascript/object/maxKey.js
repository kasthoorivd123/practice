const obj={
    a:100,
    b:12,
    c:3
    
}
let largest = 0
let maxKey = ''
for(let key in obj){
    if(obj[key]>largest){
        largest = obj[key]
        maxKey = key
    }
}
console.log(maxKey)
console.log(largest)