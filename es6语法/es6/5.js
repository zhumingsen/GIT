//  面向对象
// 核心的思想   一切皆对象
 // 对象   由相同的一类物体构成   很多对象就构成一个类

  //  people    人类    人  一个对象
//
// dogs  犬类


//定义类   class

class People {

   // 属性
    constructor(a,b){
        this.name=a;
        this.age=b;
    }
    speack(){
        console.log(this.name+this.age);
    }
}
//  创建实例的对象
let syx=new People('苏延祥',20);
 syx.speack();





