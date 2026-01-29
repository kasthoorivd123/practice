const obj ={
    1:'kasthu',
    2:21,
    3:'sjdknk'
}
function remove(obj){
    for(let key in obj){
        if(Number(key)%2==0){
            delete obj[key]
        }
    };
    console.log(obj);
}


remove(obj);



// expected output

// { '1': 'kasthu', '3': 'sjdknk' }
