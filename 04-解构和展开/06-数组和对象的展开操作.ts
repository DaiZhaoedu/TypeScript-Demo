//文件路径 ../04-解构和展开/06-数组和对象的展开操作.ts

//[001] 数组的展开操作
let one:number[] = [1, 2];
let two:number[] = [3, 4];
let resultArrM = [0, ...one, ...two, 5];
console.log(one);   //[1,2]
console.log(two);   //[3,4]
console.log(resultArrM);  //[0,1,2,3,4,5]

//[002] 对象的展开操作
let defaultObj = { name: "zhangsan", age: 18,color: "yellow" };
let targetObj = { ...defaultObj, des:"描述信息",name: "文顶顶" };
console.log(defaultObj);  //{ name: "zhangsan", age: 18,color: "yellow" };
console.log(targetObj);   //{ name: "文顶顶", age: 18,color: "yellow",des:"描述信息"};
