function log(target, name,descriptor){
    console.log(target,name,descriptor)
    let oldValue = descriptor.value
    descriptor.value = function(){
        console.log(`calling ${name} with `, arguments)
        return oldValue.apply(this,arguments)
    }
    return descriptor
}
class Math{
    @log
    add(a,b){
        return a + b
    }
}
let math = new Math()
const result = math.add(2,4)
console.log(result)
