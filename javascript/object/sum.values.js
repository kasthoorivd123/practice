const obj ={
    1:[78,3],
   3:[9,7,8]
    
}
function remove(obj){
    let sum = 0
    for(let key in obj){
     
       sum = obj[key].reduce((acc,curr)=>acc+curr)
       console.log(sum)
    }
   
}
remove(obj)

