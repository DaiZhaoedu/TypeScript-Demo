var a = "全局作用域中的变量";
var WenDemo;
(function (WenDemo) {
    var a = "命名空间WenDemo中的变量a";
    //实现了PersonInterface接口的Person类
    //通过export关键字暴露接口
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.getInfo = function () {
            return "姓名：" + this.name;
        };
        return Person;
    }());
    WenDemo.Person = Person;
})(WenDemo || (WenDemo = {}));
//错误的演示
//let p = new Person("wendingding.com");
//如果把相关代码包裹到指定命名空间中，那么需要通过包裹的命名空间来访问暴露的接口
var p = new WenDemo.Person("wendingding.com");
console.log(p); //{name:"wendingding.com"}
console.log(a); //全局作用域中的变量
