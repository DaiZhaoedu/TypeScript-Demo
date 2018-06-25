//文件路径 ../08-泛型函数/05-泛型接口02.ts

//(1) 声明泛型函数demoT
function demoT<T>(arg:T):T{
  return arg;
}

//(2) 定义泛型接口
interface GenericFn<T>{
    (arg: T): T;
}

let f1: GenericFn<number> = demoT;
console.log(f1(123));       //123
//报错：Argument of type '"字符串"' is not assignable to parameter of type 'number'.
//console.log(f1("字符串")); //错误的演示

let f2: GenericFn<string> = demoT;
console.log(f2("字符串")); //字符串
