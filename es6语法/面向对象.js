/**
 * Created by Administrator on 2018/3/19.
 */

//面向对象
// 核心的思想     一切皆对象
// 对象   由相同的一类物体构成
class People{
    //属性
    constructor(a,b){
        this.name=a;
        this.age=b;
    }
    speack(){
        console.log(this.name+this.age);
    }
}
// 创建实例的对象
let zms=new People('朱明森',20)
zms.speack()