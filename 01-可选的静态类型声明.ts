//文件路径 ../01-数据类型/01.可选的静态类型声明.ts

let num0;                   //未知的数据类型(any)
let num1 = 0;               //number类型(类型推导)
let num2:number;            //number类型(声明)
let num3:number = 123;      //number类型(声明)
let num4:number = "string"; //报错:Type '"string"' is not assignable to type 'number'.
