//文件路径 ../03-Class的使用/03-接口简单示例03.ts
//类的定义,需要遵循接口的约定
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log("执行内部的构造函数.");
    }
    Person.prototype.getInfo = function () {
        return "姓名：" + this.name;
    };
    return Person;
}());
//使用new来构造Greeter类的实例对象
var p = new Person("wendingding");
console.log(p);
