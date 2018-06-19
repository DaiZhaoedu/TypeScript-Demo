//文件路径  ../01-数据类型/00-声明变量的关键字
//[01] var 关键字声明变量
console.log(var_zero); //undefined
var var_zero = 1;
console.log(var_zero); //1
//全局作用域
var var_one = '我是字符串_wendingding';
//函数作用域
function foo() {
    var var_two = '我是函数内的字符串';
}
foo();
console.log(var_one); //输出:我是字符串_wendingding
//报错： Cannot find name 'var_two'.
//console.log(var_two);    错误的演示
for (var var_i = 0; var_i < 3; var_i++) {
    //循环三次，输出的结果均为3
    setTimeout(function () { console.log(var_i); }, 1000);
}
console.log(var_i); //打印结果为：3
/****························****/
//[02] let关键字声明变量
//注意点：let关键字使用的时候必须先声明然后才能使用
//报错：Block-scoped variable 'let_zero' used before its declaration.
//console.log(let_zero);        //错误的演示
//let let_zero:number = 1;
//全局作用域
var let_one = "wendingding";
//函数作用域
function bar() {
    var let_two = '我是函数内的字符串';
}
bar();
console.log(let_one);
var _loop_1 = function (let_i) {
    //循环3次，输出的结果为0，1，2
    setTimeout(function () { console.log(let_i); }, 1000);
};
//报错：Cannot find name 'let_two'.
//console.log(let_two); //错误的演示
for (var let_i = 0; let_i < 3; let_i++) {
    _loop_1(let_i);
}
//报错：Cannot find name 'let_i' 因为let_i的作用域为块级作用域
//console.log(let_i);   //错误的演示
/****························****/
//[03] const关键字声明变量
var T1 = 12345;
var T2 = "建议那些不希望不修改的变量均使用const声明";
//报错  Cannot assign to 'T1' because it is a constant or a read-only property.
//T1 = 234;   错误的演示
//报错： 'const' declarations must be initialized.
//const T3:boolean; 错误的演示
