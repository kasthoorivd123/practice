const obj ={
    a:10,
    b:2,
    c:3,
    d:5
}
let smallest = Infinity
let maxKey = ''
for(let key in obj){
    if(obj[key]<smallest){
        smallest = obj[key]
        maxKey = key
    }
}
if(maxKey){
    delete obj[maxKey]
}
console.log(obj)
