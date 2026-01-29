let data=[
  { name: "Alice", age: 21, course: "Math", grades: [88, 92, 79] },
  { name: "Bob", age: 23, course: "Physics", grades: [75, 85] },
  { name: "Charlie", age: 22, course: "Chemistry", grades: [90, 91] },
  { name: "David", age: 24, course: "Math", grades: [60, 70, 80] },
  { name: "Eve", age: 20, course: "Physics", grades: [95] }
]

let sum = 0
for(let i=0;i<data.length;i++){
        //  console.log(data[i].age)
         sum+=data[i].age/data.length 
}
console.log(sum)  

//expected output
//22