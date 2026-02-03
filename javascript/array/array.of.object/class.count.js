let obj =[{
    name:'kasthoori',marks:[90,60,30],classes:'A'},
  {  name:'kasthu',marks:[70,50,20],classes:'B'},
   { name:'ajay',marks:[20,80,40],classes:'C'
},
  {  name:'kasthuri',marks:[70,50,20],classes:'B'}]

  let freq={}
for(let val of obj){
  if(freq[val.classes]){
      freq[val.classes]+=1
  }else{
      freq[val.classes] = 1
  }
}
console.log(freq)

