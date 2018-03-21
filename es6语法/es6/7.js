
//  字符串的扩展

    // var a=10;

// console.log('我今年'+a+'岁');

// console.log(`我今年${a}岁`);
//
// let html='<ul>' +
//     '<li>' +
//     '</li>' +
//     '</ul>'
//
// let css=`<ul>
//     <li></li>
//      <li></li>
//       <li></li>
// </ul>`


 // repeat();  重复
//
// let str='abcrtuer';
// let str1=str.repeat(10);
// console.log(str1);


//   includes()  包含   为true   不包含为false
// startsWith()  判断是否以什么开头  如果包含，则为true  否则为false
// endsWith()判断是否以什么结尾  如果包含，则为true  否则为false

// console.log(str.includes('ac'));

// console.log(str.startsWith('ac'));



//  对象的扩展  object

//Object.is();  判断两个值是不是长的相似   NaN

// console.log(Object.is(NaN,NaN));
// console.log(Object.is(0,'0'));

//Object.assign()
// 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象。

// let json={a:1};
// let json1={a:2,b:3,c:4};
// let json2={d:5,b:6};
// Object.assign(json,json1,json2) ;
// console.log(json);




//  函数的扩展   默认参数  如果实参没有写，那么就会遵循默认的值
// function aa(a=10,b=20){
//     console.log(a+b)
// }
// aa(100,50);


//  箭头函数    ()=>{}    在箭头函数里面,没有this  ，this指的就是调用的

// setTimeout(function(){
//     console.log(this);  // window
// },2000)
//
// setTimeout(()=>{
//     console.log(this);
// },3000);

// setTimeout((a,b)=>a+b,2000);
//
// setTimeout((a)=>{
//     return a;
// },2000)


  // fs.readFile('1.txt','utf-8',(err,data)=>{
  //
  //
  //
  // });



   //  常用到的语法
        // let   const
        //  解构赋值  数组  和对象的     **********
        //  字符串的模板解析   ` ${}  `
        //   面向对象  class    *********
        // 箭头函数 ()=>{}  函数缩写   aaa(){}   *********
//    {key:value} 相同    省略value














































