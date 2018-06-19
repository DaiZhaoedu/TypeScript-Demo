//文件目录：../01-数据类型/04-类型别名.ts

type MyType = (string | boolean | number);
let value1:MyType = "我是字符串";
console.log(value1);
value1 = 123;
console.log(value1);
value1 = true;
console.log(value1);
//报错： Type 'number[]' is not assignable to type 'false'.
//value1 = [1,2,3];  错误的演示
