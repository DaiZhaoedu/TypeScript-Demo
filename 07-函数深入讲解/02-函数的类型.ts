//文件路径 ..07-函数深入讲解/02-函数的类型.ts

function add(num1:number,num2:number):string{
  return "传入的参数分别为:"+num1+"和 "+ num2 + "add的结果为:" + (num1 + num2);
}


//001 声明变量
let str:string;
//002 声明变量并做初始化赋值操作
let sum:number = 123;

//[001]提供函数变量并显示的声明函数的类型（参数和返回值等情况）
let f1:(name:string,age:number) => string;
//赋值操作
f1 = function (name:string,age:number):string
{
  return "姓名:" +name + "年龄:" + age;
}
//函数调用
str = f1("zs",18);
console.log(str);   //姓名:zs年龄:18



//[002] 声明函数（函数被指定了类型）
let str1:string;
let f2:(name:string,age:number) => string = function (name:string,age:number):string
{
  return "姓名:" +name + "年龄:" + age;
}
str1 = f2("zs",18);
console.log(str1);    //姓名:zs年龄:18
