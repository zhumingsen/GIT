/**
 * Created by Administrator on 2018/3/19.
 */

// map.set({},'1234').set({},'222333');
// console.log(map)

// 扩展运算符  ...
// let str='zhumingsen';
// let arr=[...str];
// console.log(arr)

// let arr1=[3,'aa',234,'fa']
// console.log(new Set(arr1))
// console.log([...new Set(arr1)])
//
// console.log([new Map([
//     ['a',1],
//     ['b',2],
//     ['c',3]
//     ])])

// let json={
//     name:'zms',
//     age:'20'
// }
// let json1={sex:'boy',phone:12234,...json}
// console.log(json1)

// 收缩的功能
// function aa(a,b,...arr) {
//     // console.log(a+b+c+d)
//     // console.log(...arr)
//     console.log(a+b+[...arr][0]+[...arr][1])
// }
// aa(10,20,30,40)

// for of 循环
let arr=[1,2,3,4]    //   forEach
for(let attr of arr){
    console.log(attr)
}