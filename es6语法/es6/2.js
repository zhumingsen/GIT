
  //  解构赋值
 // 1 数组的解构赋值
 //  2 对象的解构赋值

//   var a=10,b=20,c=30;
// console.log(a,b,c);
  //  数组赋值
 // let [a,b,c]=[10,20,30];
 //  console.log(a,b,c);

// let   [a,[[b],c]]=[1,[[2],3]]
//   console.log(a,b,c);
//   let [,,c]=[1,2,3];
// console.log(c);
//   let [a]=[];
// //   console.log(a);
//   let [a=10]=[]
//   console.log(a);

  //  对象的解构赋值
    json={
        name:'syx',
        age:'20',
        sex:'boy'
    }

  // let  name=json.name;
  // let  age=json.age;
  // let  sex=json.sex;

  // let {name,age,sex}=json;
  // console.log(name,age,sex);


  //{name:name,age:age,sex:sex}={name:'syx', age:'20', sex:'boy'}
 // let {name,age,sex}=json



  // var  username=  req.query.username
  //  var pass= req.query.pass
 // var   phone= req.query.phone


 // let {username,phone,pass}=req.query;

  // let {a:a,b:b}={a:1,b:2}     =>  {a,b}={a:1,b:2}
  //
  // [a,b,c]=[1,2,3]

 // [a,b,c]=[1,2,3]    [a,b,c]=[2,1,3]
//   let {a:a,b:b,c:c}={c:1,b:2,a:3};
// console.log(a,b,c)

