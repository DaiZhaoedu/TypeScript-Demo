//文件路径 ../04-解构和展开/04-解构用于函数参数.ts

//[001] 解构用于函数参数(数组)
function x([first, second]: [number, number]) {
    console.log(first);   //1
    console.log(second);  //2
}
x([1,2]);

//[002] 解构用于函数参数(对象)
function f({ a, b }: { a: string, b?: number }): void {
    console.log("执行函数");
    console.log("a的值为: " + a,"b的值为: " + b);
}

f({a:"AAAA",b:20});   //a的值为: AAAA b的值为: 20

/*****=======================******/
//[003]解构用于函数参数并设置默认值
function t({ color, age = 99 }: { color: string, age?: number }): void {
    console.log("color的值为: " + color,"age的值为: " + age);
}

t({color:"red",age:20});  //color的值为: red age的值为: 20
t({color:"red"});         //color的值为: red age的值为: 99
