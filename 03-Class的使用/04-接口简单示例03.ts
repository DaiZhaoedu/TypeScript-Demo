//文件路径 ../03-Class的使用/03-接口简单示例03.ts

interface PersonInterface {
    name: string;
    getInfo();
}

//类的定义,需要遵循接口的约定
class Person implements PersonInterface{
  //报错：Property 'name' in type 'Person' is not assignable to the same property in base type 'PersonInterface'.
  //name:number;      错误的演示（类型和接口不一致）
  name:string;
  constructor(name:string){    //调用时内部自动执行该代码段
    this.name = name;
    console.log("执行内部的构造函数.");
  }
  getInfo(){      //getInfo方法
    return "姓名：" + this.name;
  }
}

//使用new来构造Greeter类的实例对象
var p = new Person("wendingding.com");
