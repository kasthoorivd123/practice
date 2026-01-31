let a = 'ab#c'
let b = 'ab#c'
function backspace(s){
    let result =[]
    for(let char of s){
    
        if(char == '#'){
            result.pop()
        }else{
            result.push(char)
        }
    }
    
    return result.join('')
}



console.log(backspace(a)==backspace(b))

//expected output =>true