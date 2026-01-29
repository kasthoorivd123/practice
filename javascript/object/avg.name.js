let data=[
  { name: "Alice", age: 21, course: "Math", grades: [88, 92, 79] },
  { name: "Bob", age: 23, course: "Physics", grades: [75, 85] },
  { name: "Charlie", age: 22, course: "Chemistry", grades: [90, 91] },
  { name: "David", age: 24, course: "Math", grades: [60, 70, 80] },
  { name: "Eve", age: 20, course: "Physics", grades: [95] }
]

let avg ={}
for(let a of data){
    let sum = 0
     for(let i=0;i<a.grades.length;i++){
         sum+= a.grades[i]
     }
     avg[a.name] = sum/a.grades.length-1
}

console.log(avg)

//expected output
//{
//   Alice: 85.33333333333333,
//   Bob: 79,
//   Charlie: 89.5,
//   David: 69,
//   Eve: 94
// }