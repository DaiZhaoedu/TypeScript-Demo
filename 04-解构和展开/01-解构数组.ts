//文件路径  ../04-解构和展开/01-解构数组.ts

//[001] 解构数组简单介绍
//声明变量arrM(数组)
let arrM:number[] = [100,200];
//解构操作
//从arrM数组中提取索引为0和1的元素赋值给新声明的变量one和two
let [one,two] = arrM;
console.log("one = " + one);    //one = 100
console.log("two = " + two);    //one = 200


//[002] 解构数组中的部分元素
let arr:string[] = ["one","two","three","four"];
//开始位置
let [first] = arr;
console.log("first = " + first);  //first = one

//结尾位置
let [,,,last] = arr;
console.log("last = " + last);  //last = four

//指定位置（提取数组中第一个元素赋值给a,第三个元素赋值给c）
let [a,,c,] = arr;
console.log("a = " + a + " c = " + c);  //a = one c = three
