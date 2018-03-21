
//面向对象  一切皆对象
//类   定义类    Class  名称首字母大写 {   自身的属性 构造函数（constructor）  自身的方法}
//  特点：  抽象  封装 多态 继承
//构造函数（constructor）   当实例被初始化就可以自动执行

// class Computer {
//     // 构造函数
//   constructor(pinbai,price){
//       this.pinbai=pinbai;
//       this.price=price;
//   }
//
//   // 打电话上网
//     online(){
//     console.log('我是'+this.pinbai+'，我可以上网');
//   }
//
// }
//
// let apple=new Computer('iPhoneX','8300');
//
// apple.online();
// let huawei=new Computer('huawei','2500');
// huawei.online();
//
//
// //  继承   父类    子类   extends
// class  Tscomputer extends  Computer{
//
//     constructor(pinpai,price,color){
//         // 调用父级的构造函数
//         super(pinpai,price);
//         this.color=color;
//     }
//
//     // zhuji
//     zhuji(){
//         super.online();
//        console.log('我是'+this.pinbai+',我有一个很重的身子(主机),我是'+this.color);
//     }
//
//
// }
// let  taishi=new Tscomputer('清华同方','9999','黑色');
//
// taishi.online();
//
// taishi.zhuji();


//  私有的  公有的   受保护的

class Tv {
    constructor(pinpai,price,color){
        this.pinpai=pinpai;
        this.price=price;
        this.color=color;
    }

    //  公有的方法 public  默认公有
    //  私有的   private  自身的类进行提供
    //  遥控器
     yaokongqi() {
        watch();
    }

}

function watch(){
    console.log('我可以看电视');
}


let Tcl=new Tv('Tcl','3000','黑色');

Tcl.yaokongqi();










