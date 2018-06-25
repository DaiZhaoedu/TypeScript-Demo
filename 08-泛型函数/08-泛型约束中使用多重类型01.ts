//文件路径 ../08-泛型函数/08-泛型约束中使用多重类型01.ts

//定义接口：Interface_One和Interface_Two
interface Interface_One{
  func_One();
}

interface Interface_Two{
  func_Two();
}

//下面是错误的演示
//泛型类（泛型约束为Interface_One,Interface_Two）
class  classTest<T extends Interface_One,Interface_Two>
{
  propertyDemo:T;
  propertyDemoFunc(){
    this.propertyDemo.func_One();
    this.propertyDemo.func_Two();
  }
}
