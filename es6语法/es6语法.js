/**
 * Created by Administrator on 2018/3/19.
 */
// 结构赋值
//1  数组的结构赋值
//2   对象的结构赋值

// var a=10,b=20,c=30
// console.log(a,b,c)
// 数组赋值
// let [a,b,c]=[10,20,30]
// console.log(a,b,c)
// let [a,[[b],c]]=[1,[[2],3]]
// console.log(a,b,c)




// 对象的结构赋值
json={
    name:'zms',
    age:'20',
    sex:'boy'
}
// let  name=json.name;
// let  age=json.age;
// let  sex=json.sex;
// console.log(name)

let {name,age,sex}=json;
console.log(name,age,sex);