const obj ={
    1:'kasthu',
    2:21,
    3:'sjdknk',
    4:'slla',
    5:'akls'
    
}
function remove(obj){
    let largest = 0
    let secondLargest = 0
    for(let key in obj){
        
        if(Number(key)>largest){
            secondLargest = largest,
            largest = key
        }else if(Number(key)<Number(largest) && Number(key)>Number(secondLargest)){
            secondLargest = key
           
        }
    };
    delete  obj[secondLargest]
    console.log(obj);
}


remove(obj);


//{ '1': 'kasthu', '2': 21, '3': 'sjdknk', '5': 'akls' }
