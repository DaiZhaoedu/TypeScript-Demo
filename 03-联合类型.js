//文件路径: ../01-数据类型/03-联合类型.ts
var test0 = 1;
//报错：Type 'false' is not assignable to type 'number'.
//test0 = false;    //错误的演示
var test1 = 123;
test1 = true;
console.log(test1);
var test2 = [1, 2, 3];
test2 = "我是字符串";
console.log(test2);
