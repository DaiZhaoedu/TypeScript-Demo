//文件路径 ../08-泛型函数/03-函数的类型.ts

//[001] 函数的类型
//(1) 声明demo函数
function demo(name:string,age:number):string
{
  return "姓名:" +name + "年龄:" + age;
}

//(2) 把demo函数赋值给f
let f:(name:string,age:number)=>string = demo;
//使用demo函数的调用签名
//let f:{(name:string,age:number):string} = demo;
console.log(f("zs",18));    //姓名:zs年龄:18


//[002] 泛型函数的类型
function demoT<T>(arg:T):T{
  return arg;
}
//泛型函数demoT的类型为：<T>(arg:T) =>T
let f1 : <T>(arg:T) =>T = demoT;
//使用带有调用签名的对象字面量来定义泛型函数
let f2 : {<T>(arg:T) :T} = demoT;
//可以使用不同的泛型参数名（这里为X）
let f3 : <X>(arg:X) =>X = demoT;
//不使用类型声明
let f4 = demoT;

console.log(f1("abc"));     //abc
console.log(f2("哈哈"));     //哈哈
console.log(f3("嘿嘿"));     //嘿嘿
console.log(f4("咕噜"));     //咕噜
