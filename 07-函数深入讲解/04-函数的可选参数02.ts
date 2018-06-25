//文件路径 ../07-函数深入讲解/04-函数的可选参数02.ts

//函数声明
function getInfo(name:string,age:number,isStudent?:boolean) : string{

  let result:string;
  result = "姓名: " + name + " 年龄: " + age;
  if(isStudent)
  {
    result += " 是否为学生? " + isStudent;
  }
  return result;
}

//函数调用
console.log(getInfo("文顶顶",18,true));  //姓名: 文顶顶 年龄: 18 是否为学生? true

console.log(getInfo("文顶顶",20));       //姓名: 文顶顶 年龄: 20
