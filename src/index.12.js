// function testDec(isDec){
//     return function(target){
//         target.isDec = isDec
//     }
// }
// @testDec(false)
// class Demo {

// }
// alert(Demo.isDec)

function mixins(...list){
    return function(target){
        Object.assign(target.prototype, ...list)
    }
}

const Foo = {
    foo(){
        alert('foo')
    }
}
@mixins(Foo)
class MyClass{
    constructor(name){
        this.name = name
    }
}
let obj = new MyClass('ysz')
obj.foo()