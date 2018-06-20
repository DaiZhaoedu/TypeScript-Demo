//文件路径 ../03-Class的使用/01-Class的典型结构.ts
//类的定义
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.age = age;
        this.name = name;
        console.log("执行内部的构造函数.");
    }
    Person.prototype.getInfo = function () {
        return "姓名：" + this.name + " 年龄：" + this.age;
    };
    return Person;
}());
//使用new来构造Greeter类的实例对象
var p = new Person("wendingding", 18);
console.log(p);
