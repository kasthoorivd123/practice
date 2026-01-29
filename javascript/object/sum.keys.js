const obj ={
    1:[78,3],
   3:[9,7,8]
    
}
function remove(obj){
    let sum = 0
    for(let key in obj){
        sum+=Number(key)
    }
    console.log(sum)
    return sum
}
remove(obj)