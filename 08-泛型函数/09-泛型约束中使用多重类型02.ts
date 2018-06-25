//文件路径 ../08-泛型函数/09-泛型约束中使用多重类型02.ts

//定义接口：Interface_One和Interface_Two
interface Interface_One{
  func_One();
}

interface Interface_Two{
  func_Two();
}

//Interface_One和Interface_Two成为了超接口，它们是Interface_T的父接口
interface Interface_T extends Interface_One,Interface_Two{};

//泛型类
class  classTest<T extends Interface_T>
{
  propertyDemo:T;
  propertyDemoFunc(){
    this.propertyDemo.func_One();
    this.propertyDemo.func_Two();
  }
}

let obj = {
  func_One:function(){
    console.log("func_One");
  },
  func_Two:function(){
    console.log("func_Two");
  }
}
//获取实例化对象classTestA
let classTestA = new classTest();
classTestA.propertyDemo = obj;
classTestA.propertyDemoFunc();    //func_One func_Two


//下面是错误的演示
let classTestB = new classTest();

//报错：error TS2322: Type '{ func_Two: () => void; }' is not assignable to type 'Interface_T'.
classTestA.propertyDemo = {
  func_Two:function(){
      console.log("func_Two_XXXX");
  }
};
