//文件路径 ../08-泛型函数/07-泛型约束.ts

//[001] 定义用于描述约束条件的接口
interface hasLengthP
{
  length: number;
}

//[002] 声明fn函数(应用了泛型约束)
function fn<T extends hasLengthP>(arg:T):T
{

  console.log("打印length值 = " + arg.length);
  return arg

}

//[003] 调用测试
console.log(fn([1,2,3]));   //打印length值 = 3 [1,2,3];
console.log(fn({name:"zs",length:1})); //打印length值 = 1 对象内容

//说明：字符串会被转换为对象类型（基本包装类型）
console.log(fn("测试"));    //打印length值 = 2 测试

//报错:error TS2345: Argument of type '123' is not assignable to parameter of type 'hasLengthP'.
console.log(fn(123));   //错误的演示
