import { deprecate } from 'core-decorators'
class Person{
    @deprecate('即将废用',{url:'www.imooc.com'})
    name(){
        return 'zhangsan'
    }
}
let p = new Person()
p.name()