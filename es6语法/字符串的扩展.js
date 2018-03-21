/**
 * Created by Administrator on 2018/3/20.
 */

// var a=10;
// // console.log('我今年'+a+'岁了')
// console.log(`我今年${a}岁了`)
//
// let html='<ul>' +
//     '<li>' +
//     '</li>' +
//     '</ul>'
//
// let css=`<ul>
//           <li></li>
//           </ul>`

//repeat();
let str='abc';
let str1=str.repeat(10);
// console.log(str1)

// includes()    包含   为 true   不包含为 false
// startsWith()  判断是否以什么开头    如果包含，则为true   否则为false
// endsWith()    判断是否以什么结尾    如果包含，则为true  否则为false
// console.log(str.includes('ae'))
// console.log(str.startsWith('c'))
// console.log(str.endsWith('b'))




// 对象的扩展    object
//Object.is();    判断两个值是不是长得相似
// console.log(Object.is())



// Object.assign()  用于对象的合并,将源对象的所有可枚举属性，复制到目标对象
// let json={a:1};
// let json1={a:2,b:3,c:4};
// let json2={d:5,b:6};
// Object.assign(json,json1,json2)
// console.log(json)
// console.log(json1)
// console.log(json2)


// 函数的扩展      默认参数  如果实参没有写，那么就会遵循默认的值
// function aa(a=10,b=20) {
//     console.log(a+b)
// }
// aa(20,40)



// 箭头函数      ()=>{}       zai 箭头函数里面，没有this，this指的就是调用的
// setInterval(function() {
//     console.log(this);   //window
// },2000)
//
// setTimeout(()=>{
//     console.log(this)
//     },3000)

// setTimeout(a=>a,2000)    X

// setTimeout((a)=>{
//     return a;
// },2000)

// fs.readFile('1.txt','utf-8',(err,data)=>{
//
// });


// 常用到的语法
// let  const
// 结构赋值         数组的和对象的   *******
// 字符串的模板解析     `${}`
//面向对象     class        *********
//箭头函数  ()=>{}    函数缩写   aa(){}    ********
//   {key:value}  相同  省略value
