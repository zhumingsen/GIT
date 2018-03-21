
//  es6  新增的数据结构   Map
//是用来存储不重复key的Hash结构。不同于集合(Set)的是，字典使用的是[键，值]的形式来储存数据的。

//  创建map对象   new Set([1,2,3,4])
//     let  map=new Map([['a',1],['b',2],['c',3]]);  //  php   =>
// //  php   数组   索引的数组     关联数组
//    // array(1,2,3,4)
//   //  array('a'=>1,'b'=>2);
//     console.log(map);

    //  属性  size
//console.log(map.size);
  //添加
//set(key, value) 设置键名key对应的键值为value，
//然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键
//  添加
// map.set('name','syx').set('age',20).set('sex','boy');
// console.log(map);
//  获取   get(key) get方法读取key对应的键值，如果找不到 key，返回undefined
//  删除
//3 delete(key) 删除某个键，返回true。如果删除失败，返回false


//4 has(key) 方法返回一个布尔值，表示某个键是否在当前Map对象之中

//5 clear() 清除所有数据，没有返回值。

//keys() 返回键名的遍历器

//console.log(map.keys());

//values() 返回键值的遍历器

  // NAN  ===  NAN
// map.set(NaN,'1').set(NaN,'2');
//
// console.log(map);
//
// map.set({},'1324').set({},'232421');
//
// console.log(map);

  //  扩展运算符  ...
// let  str='suyanxiang';
// let   arr=[...str];
// console.log(arr);   //[ 's', 'u', 'y', 'a', 'n', 'x', 'i', 'a', 'n', 'g' ]
//
// let  arr1=[3,'aa','bb',4354,'fds'];
// console.log(new Set(arr1));
//
// console.log([...new Set(arr1)]);
//
//
// console.log([...new Map([
//     ['a',1],
//     ['b',2],
//     ['c',3]
// ])]);

// let json={
//     name:'syx',
//     sex:'boy'
// }
//
// let json1={age:20,phone:13243225,...json};
// console.log(json1);

  //  收缩的功能
  //   function aa(a,b,...arr){
  //       //console.log(a+b+c+d);
  //       //console.log([...arr]);
  //       console.log(a+b+[...arr][0]+[...arr][1]);
  //   }
  //   aa(10,20,30,40);


  // for of  循环
let arr=[1,2,3,4];      //  forEach()
for(let attr of arr){
    console.log(attr);
}





















