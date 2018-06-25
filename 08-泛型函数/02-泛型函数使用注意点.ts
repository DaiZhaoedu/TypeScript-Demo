//文件路径 ../08-泛型函数/02-泛型函数使用注意点.ts

//说明 该泛型函数使用类型变量T来表示接收参数和返回值的类型
function fn<T>(arg:T):T{
  console.log("打印length值 = " + arg.length);
  return arg;
}

//报错：error TS2339: Property 'length' does not exist on type 'T'.
console.log(fn([1,2,3]));

//调整组织代码的方式[001]
function f1<T>(arg:T[]):T[]{
  console.log("打印length值 = " + arg.length);
  return arg;
}
console.log(f1([1,2,3]));                    //打印length值 = 3 [1,2,3]
console.log(f1(["str1","str2","demo"]));     //打印length值 = 3 ["str1","str2","demo"]



//调整组织代码的方式[002]
function f2<T>(arg:Array<T>):Array<T>{
  console.log("数组的长度为 = " + arg.length);
  return arg;
}
console.log(f2([2,4,8,16]));                    //打印length值 = 4 [2,4,8,16]
