//文件路径 ..07-函数深入讲解/01-函数的创建.ts

//测试变量声明提升
console.log(getName);   //函数
console.log(getNameT);  //undefined
console.log(f1);        //undefined

//[001] 函数声明的方式创建(命名函数)
function getName(name:string):string{
  return "getName函数=>姓名 ：" + name;
}


//[002] 函数表达式的方式创建(匿名函数)
var getNameT = function (name:string):string{
  return "getNameT函数=>姓名 ：" + name;
}

//[003] 箭头函数
var f1 = (name:string):string=>{
  return "f1函数=>姓名 ：" + name;
}

console.log(getName("文顶顶"));            //getName函数=>姓名 ：文顶顶
console.log(getNameT("wendingding.com")); //getNameT函数=>姓名 ：wendingding.com
console.log(f1("奥特曼"));                 //f1函数=>姓名 ：奥特曼
