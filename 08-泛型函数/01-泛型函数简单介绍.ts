//文件路径 ../08-泛型函数/01-泛型函数简单介绍.ts

//[001] 示例代码1
//说明 该函数接收一个string类型的参数，并返回传入的数据
//缺点 限定了函数的参数类型以及返回值类型必须是string
function f1(str:string):string{
  return str;
}

//wendingding.com
console.log(f1("wendingding.com"));

//[002] 示例代码2
//说明 该函数接收一个任意类型的参数，并返回传入的数据
function f2(arg:any):any{
  return arg;
}
console.log(f2("字符串测试"));   //字符串测试
console.log(f2(123));          //123
console.log(f2(true));        //true


//wendingding.com
console.log(f1("wendingding.com"));



//[003] 示例代码3
//说明 该泛型函数使用类型变量T来表示接收参数和返回值的类型
function f3<T>(arg:T):T{
  return arg;
}
console.log(f3<string>("字符串"));      //字符串
console.log(f3<number>(345));          //345
console.log(f3<boolean>(false));        //false

console.log(f3("字符串-类型推导"));      //字符串-类型推导
console.log(f3(123));                 //123
console.log(f3(true));                //true
