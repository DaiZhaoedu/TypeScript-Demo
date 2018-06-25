//文件路径 ../08-泛型函数/04-泛型接口.ts

//(1) 声明泛型函数demoT
function demoT<T>(arg:T):T{
  return arg;
}

//(2) 定义GenericFn接口
interface GenericFn{
    <T>(arg: T): T;
}

let fn: GenericFn = demoT;
console.log(fn("哈哈"));  //哈哈
