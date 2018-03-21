
//es6中新增的set结构    存储数据的
//集合的基本概念：集合是由一组无序且唯一（即不能重复）的项组成的。
//这个数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中。
//特点：key 和 value 相同，没有重复的 value。
//ES6 提供了数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

//  创建set
    const set= new Set([1,2,3,4]);
    console.log(set);
//  属性
   // 长度  size

//console.log(set.size);

    //  添加  add
    set.add('a').add('b').add('c');
    console.log(set);

    //set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功。

    console.log(set.delete('c'));
    console.log(set);

//set.has(value) 判断该值是否为Set的成员，反回一个布尔值


        //4 set.clear() 清除所有数据，没有返回值。

