//文件路径 ../07-函数深入讲解/03-函数的可选参数01.ts

//函数声明
function getInfo(name:string,age:number,isStudent:boolean) : string{

  let result:string;
  result = "姓名: " + name + " 年龄: " + age;
  if(isStudent)
  {
    result += " 是否为学生? " + isStudent;
  }
  return result;
}

//函数调用
console.log(getInfo("文顶顶",18,true));  //姓名: 文顶顶年龄: 18 是否为学生? true

//错误的演示：error TS2554: Expected 3 arguments, but got 2.
console.log(getInfo("文顶顶",true));
