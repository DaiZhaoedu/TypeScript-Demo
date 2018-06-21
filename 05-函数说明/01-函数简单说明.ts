//文件路径 ../05-函数说明/01-函数简单说明.ts

//[001] javaScript风格的函数（声明函数）
//下面的代码以“函数声明”的方式创建了add函数
//add函数拥有两个参数，形参a和形参b
//add函数的作用为对传入的两个参数进行+运算符计算，并返回结果
//如果设计的该函数只能接收number类型的两个参数，那么函数体中还应该对参数类型进行校验
function add(a,b){
  return a + b;
}


//[002] TypeScript中的函数（声明函数）
function f1(a:number,b:number)
{
  return a + b;
}
//函数调用
let result = f1(10,20);    //返回结果为30
result = f1(10,"字符串");
