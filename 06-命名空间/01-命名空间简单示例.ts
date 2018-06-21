let a:string = "全局作用域中的变量";

namespace WenDemo{

  let a:string = "命名空间WenDemo中的变量a";

  //接口
  interface PersonInterface {
      name: string;
      getInfo();
  }

  //实现了PersonInterface接口的Person类
  //通过export关键字暴露接口
  export class Person implements PersonInterface{
    name:string;
    constructor(name:string){
      this.name = name;
    }
    getInfo(){      //getInfo方法
      return "姓名：" + this.name;
    }
  }
}

//错误的演示
//let p = new Person("wendingding.com");

//如果把相关代码包裹到指定命名空间中，那么需要通过包裹的命名空间来访问暴露的接口
let p = new WenDemo.Person("wendingding.com");
console.log(p);   //{name:"wendingding.com"}
console.log(a);   //全局作用域中的变量
