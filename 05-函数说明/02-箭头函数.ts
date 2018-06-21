//文件路径 ../05-函数说明/02-箭头函数.ts

/*
* 这是TypeScript中典型的普通函数，下面提供等价的箭头函数代码
let add = function (a:number,b:number) : number{
  return a + b;
}
*/

let add = (a:number,b:number) :number => {
  return a + b;
}

let res1 = add(10,200);  //210




let sume = (a:number,b:number,callBack:(result:number) => void) : void =>{  callBack(a +b);}
sume(10,20,(result:number) : void =>{console.log("result = " + result)；});



//输出结果为：result = 30
