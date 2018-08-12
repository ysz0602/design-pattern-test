let star = {
    name:'张XX',
    age:25,
    phone:'star:13900001111'
}
//经纪人
let agent = new Proxy(star, {
    get: function(target, key){
        if(key === 'phone'){
            return 'agent:16899997777'
        }
        if(key === 'price'){
            return 120000
        }
        return target[key]
    },
    set: function(target,key,val){
        if(key === 'customPrice'){
            if(val < 1000000){
                throw new Error('价格太低')
            }else{
                target[key] = val
                return true
            }
        }
    }
})

//test
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 1500000
console.log(agent.customPrice)