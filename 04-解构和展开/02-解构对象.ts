//文件路径 ../04-解构和展开/02-解构对象.ts

//[001] 解构对象简单介绍
let objM:any = {author:"文顶顶",address:"wendingding.com",age:18,color:"red"};
let {author,age,address} = objM;

//解构的顺序并不重要
//let {author,address,age} = objM;
console.log("author = "+author);
console.log("age = "+age);
console.log("address = "+address);

/*****=======================******/
//[002] 对象解构属性重命名
let obj:any = {className:"软件工程",classNumber:"软件工程_02",date:"2016-09-01"};

//在解构对象的时候，支持重命名的方式
let {className,classNumber:classNo,date:classDate} = obj;
console.log("班级名称 className = " + className); //班级名称 className = 软件工程
console.log("班级编号 classNO = " + classNo);     //班级编号 classNO = 软件工程_02
console.log("开学日期 classDate = " + classDate); //开学日期 classDate = 2016-09-01



/*****=======================******/
//[003] 支持使用字面量对象来解构赋值

let a:string;
let b:string;
({a , b } = {a:"我是A",b:"我是B"});
console.log("a = " + a);  //a = 我是A
console.log("b = " + b);  //b = 我是B

//[004]支持对变量进行类型声明
let o = {"des":"描述信息","num":20};
let {des, num}: {a: string, b: number} = o;
console.log(des);   //描述信息
console.log(num);   //20
