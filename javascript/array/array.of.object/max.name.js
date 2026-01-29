
const tasks = [
  { id: 1, priority: 45, name: "Task A" },
  { id: 2, priority: 12, name: "Task B" },
  { id: 3, priority: 78, name: "Task C" },
  { id: 4, priority: 34, name: "Task D" },
  { id: 5, priority: 56, name: "Task E" },
  { id: 6, priority: 9,  name: "Task F" },
  { id: 7, priority: 23, name: "Task G" },
  { id: 8, priority: 67, name: "Task H" },
  { id: 9, priority: 1,  name: "Task I" },
  { id: 10, priority: 90, name: "Task J" }
];

let max = 0
let info=''
for(let a of tasks){
    if(a.priority>max){
        max = a.priority
        info = a
    }
}
console.log(info.name)

//expected output 
//Task J