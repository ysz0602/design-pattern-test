import { readonly } from 'core-decorators'
class Person {
    @readonly
    name(){
        return '张三'
    }
}
let p = new Person()
alert(p.name())
p.name = function(){}
