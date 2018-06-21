//文件路径 ../04-解构和展开/05-剩余模式.ts

//将数组中除了前两个之外的元素（剩余的元素）赋值给c
let [a,b, ...c] = [1, 2, 3, 4, 8];
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3,4,8]

//剩余模式用于对象解构
let o = {testA:"我是A",testB:"我是B",testC:"我是C"};
let { testA, ...passthrough } = o;
console.log(testA);       // 我是A
console.log(passthrough); // {testB:"我是B",testC:"我是C"}


//报错: A rest parameter or binding pattern may not have a trailing comma.
//let { testB, ...Other,} = o;  //错误的演示
