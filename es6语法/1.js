
   //es5  语法
   // 数字   number  Number('123acx')  转数字  NaN
   // 字符串  string  charAt()  length
   //  布尔值  true  false
   //  对象  （函数  数组  json  null  ）
   //  函数  function(){}  执行一段功能  原型属性  prototype
   // 数组   []  增添改插  [0]
   //  json  {}  全是是真的
   //  null    假的
   //  undefined 未定义     假的

 //  true  除了0以外的数字 除了空字符串 '0' 函数  除了数组中能转成数字0的  json

   //  false  0 '' '0' [0] null  undefined



   //  es6 全称叫做 es2015


     //   var  声明变量的
   //   let   声明变量


//  1. 用let声明的变量只在命令所在的代码块内有效
  //  代码块   {}
  //  function a(){
  //
  //  }
  //  for(var i=0;i<3;i++){
  //
  //  }
   
   // var a=9;
   // {
   //     var a=10;
   // }
    
   // {
   //     let a=10;
   //     var b=20;
   //     console.log(a); // 10
   //     console.log(b);  //20
   // }
   // console.log(b);   // 20
   // console.log(a);   //报错


   //  2.使用let声明的变量在预解析的时候不会被提升

    // console.log(a);
    // var a=10;
    // console.log(a);
    // let a=10;

   //3.Let不允许在同一作用域下声明已经被声明过的变量

   // var a=10;
   //  var a=20;
   //  console.log(a);
   //  let a=10;
   //  let a=20;
   //  console.log(a);  //  'a' has already been declared

   // let a=10;
   // {
   //     let a=20;
   // }
   //  console.log(a);

  //  for循环中  处于{}外面的是父作用域  {} 里面的属于子作用域
  //  for(let a=10;a<20;a++){
  //       let a=20;
  //       console.log(a)
  //  }
  //  console.log(a)


   // var  btn=document.getElementsByTagName('button');
   //
   // for(let i=0;i<btn.length;i++){
   //     btn[i].onclick=function(){
   //         console.log(i);
   //     }
   // }

    //  声明常量的   const
  // Const  必须   声明时就应该赋值    不允许重复声明  代码块内有效

   {
       const  a=10;
   }

   console.log(a);





