//文件路径: ../01-数据类型/03-联合类型.ts

let test0 :number = 1;
//报错：Type 'false' is not assignable to type 'number'.
//test0 = false;    //错误的演示

let test1:(number | boolean) = 123;
test1 = true;
console.log(test1);

let test2:(number[] | string) = [1,2,3];
test2 = "我是字符串";
console.log(test2);
