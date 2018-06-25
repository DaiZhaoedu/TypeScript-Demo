//文件路径 ../07-函数深入讲解/06-函数的参数不确定.ts

//[001] 在声明函数的时候，不提供形参和类型声明
//TypeScript编译不通过，当调用时候报错：error TS2554: Expected 0 arguments, but got 3.
function sum():number{
  let result;
  for(let i = 0; i < arguments.length ; i++)
  {
    result += arguments[i];
  }
  return result;
}

sum(1,2,3);
sum(2,4,8);
