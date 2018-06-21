//文件路径 ../04-解构和展开/03-交换变量和设置默认值.ts

//[001] 交换变量
let first:string = "我是第一个_first";
let last:string = "我是最后一个_last";

[first , last] = [last,first];
console.log("first =>" + first);  //first =>我是最后一个_last
console.log("last  =>" + last);   //last  =>我是第一个_first


/*****=======================******/
//[002] 解构数组或对象的时候设置默认值
let [a,b = 20,c] = [10];  //解构操作
console.log(a,b,c);       //10 20 undefined

let color,age;
({color = "yellow",age} = {age:18,color:undefined});
console.log(color);   //yellow
console.log(age);     //18

//解构对象的时候重命名属性并设置默认值
var {one:_one = "哈哈哈", two:_two = "嘿嘿"} = {one:"我是one"};
console.log(_one);    // 我是one
console.log(_two);    // 嘿嘿
