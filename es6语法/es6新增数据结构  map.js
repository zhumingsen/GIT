/**
 * Created by Administrator on 2018/3/19.
 */


// es6 新增的数据结构  map
//
// 是用来存储不重复key的hash结构，不同于结合(set)的是，字典使用的是[键，值]的形式来存储数据的


// 创建map对象   new set([1,2,3])
let  map=new Map([['a',1],['b',2],['c',3]]); //php =>
//php 数组   索引的数组   关联数组
//拓展   array(1,2,3)   //索引数组
// 拓展  array('a'=>1,'b'=>2)  关联数组
console.log(map)

//属性  size

console.log(map.size)

//添加
// set(key,value) 设置键名key对应的键值为value，
// 然后返回整个map结构。如果key已经有值，则键值会被更新，否则就生成改键
map.set('name','zms').set('age',20).set('sex','boy')
console.log(map)

// 获取  get(key)  get方法读取key对应的键值，如果找不到key，返回undefined
let a=map.get('name')
console.log(a)

// 删除 delete(key)删除某个键，返回true。如果失败，返回false
let b=map.delete('age')
console.log(b)

// has(key) 方法返回一个布尔值，表示某个键是否在当前map对象之中 返回true或false
let c=map.has('sex');
console.log(c)

// clear清除所有数据，没有返回值
// map.clear();
// console.log(map)

// keys() 返回键名的遍历器
console.log(map.keys())

