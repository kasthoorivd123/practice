const obj ={
    1:[78,3],
  3:[9,7,8]
    
}
function remove(obj){
  for(let key in obj){
      if(key == 3){
          obj[4] = obj[key];
          delete obj[key]
      }
  }
  return obj
}
console.log(remove(obj));

//exptected output
//{ '1': [ 78, 3 ], '4': [ 9, 7, 8 ] }
