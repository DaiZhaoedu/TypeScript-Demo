//文件路径 ../03-Class的使用/03-接口简单示例02.ts

interface ObjWithNameValue {
  name: string;
}

function logNameAndOtherInfo(obj:ObjWithNameValue){
  console.log("name：" + obj.name);
  console.log("Other：默认的其它信息，这里不做处理");
}

let obj1:any = {name:234,age:18};
let obj2:any = {color:"red",age:18};
logNameAndOtherInfo(obj1);  //name：文顶顶 //Other：默认的其它信息，这里不做处理
logNameAndOtherInfo(obj2);  //undefined   //Other：默认的其它信息，这里不做处理
