//文件路径 ../01-数据类型/02-基本数据类型.ts

//01 布尔类型的值
//类型关键字(boolean)
//说明 true或者false
let bool1:boolean = true;
let bool2:boolean = false;

//02 字符串类型的值
//类型关键字(string)
//说明 用双引号或单引号括住一个或多个字符
let str1:string = "文顶顶";
let str2:string = 'wen_dingd_ding';
let str3:string = "Hi '王二!' 你好，我是老实人。"

//03 数值类型
//类型关键字(number)
//说明 同JavaScript中的number类型
let num1:number = 123;
let num2:number = 123.321;

//04 数组类型
//类型关键字(array)
//数组类型声明方式(一) 关键字 数组名:类型[]
let arr1:number[] = [1,2,3,4];
//let arr2:number[] = [1,3,5,'T',6];            //错误的演示，仅仅允许数字作为数组的元素
//let arr2:(string | number)[] = [1,3,5,'T',6]; //正确的处理方式

//数组类型声明方式(二) 关键字 数组名:array<类型>
let arr3:Array<number> = [2,4,6,8];
let arr4:Array<any> = [2,4,6,8,"T",false];

//05 any类型的值
let any1 ;    //声明变量的时候没有进行初始化操作，无法通过类型推导得出真实类型，通常总是设置为any类型
let any2:any = "我现在是字符串";   //如果某个变量其类型可能会变化，建议使用any类型
any2 = false;

//错误的演示
//报错：Type '123' is not assignable to type 'string'.
let test:string = "字符串类型的值";
//test = 123;     //把数值赋值给test变量

//06 枚举类型
enum Color {Red , Green , Yellow , Blue};
let a:Color = Color.Yellow;
console.log(a);     //打印的结果为2，每个选项从0开始依次递增

//void类型
//声明一个返回值为void类型（没有返回值）的函数
function foo():void{
  console.log("这是一个没有返回值的函数，返回值的类型为void");
}
foo();

//关于null和undefined 这样使用没有意义
let test1:null = null;
let test2:undefined = undefined;
let test3:null;
let test4:undefined;
