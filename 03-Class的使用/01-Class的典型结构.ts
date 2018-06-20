//文件路径 ../03-Class的使用/01-Class的典型结构.ts

//类的定义
class Person{
  age:number;       //age属性
  name:string;      //name属性
  constructor(name:string,age:number){    //调用时内部自动执行该代码段
    this.age = age;
    this.name = name;
    console.log("执行内部的构造函数.");
  }
  getInfo(){      //getInfo方法
    return "姓名：" + this.name + " 年龄：" + this.age
  }
}

//使用new来构造Greeter类的实例对象
var p = new Person("wendingding",18);
console.log(p);
