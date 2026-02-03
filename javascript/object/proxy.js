let user ={
    name:'kasthuri'
}

let proxyUser = new Proxy(user,{
    get(target,property){
        console.log(property+'property')
        return target[property]
    }
})

console.log(proxyUser.name)