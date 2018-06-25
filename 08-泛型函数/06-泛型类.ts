//文件路径 ../08-泛型函数/06-泛型类.ts

//泛型类(Class)
class Person<T>{
  //[1] 属性部分
  name:T;
  color:T;
  //[2] 方法部分
  add:(a:T,b:T)=>T;
}

//获取实例对象p1
var p1 = new Person<string>();
p1.name = "张三";

//报错： TS2322: Type '123' is not assignable to type 'string'.
//p1.name = 123;  错误的演示
p1.color = "Red";
p1.add = function(a,b){
  return a + b;
}
console.log(p1);                      //{name:"张三",color:"Red",...}
console.log(p1.add("ABC","-DEF"));    //ABC-DEF


//获取实例对象p2
var p2 = new Person<number>();
p2.name = 0;
p2.color = 1;
p2.add = function(a,b){
  return a + b;
}
console.log(p2.add(100,200));         //300
