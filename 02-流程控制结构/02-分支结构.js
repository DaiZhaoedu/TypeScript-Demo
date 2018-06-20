//文件目录 ../02-流程控制结构/02-分支结构.ts
//分支结构其实就是林中路在某个节点分叉为多条，而只能选择其中一条路继续走下去
//具体走哪条路就像是人生抉择，得出结选择论的部分被称为判断条件，是布尔类型的值（true/fasle）
//[01] if条件语句结构
//当条件满足的时候，执行{}中的代码，否则就忽略
var temp = true;
if (temp) {
    console.log("temp的值为true");
}
//.....
//[02] if...else语句结构
//给定两条路，只能也必须走某一条
if (temp) {
    console.log("temp的值为true");
}
else {
    console.log("temp的值为false");
}
//[03] if...else if...语句结构
//给定多条路，根据条件进行选择其中的一条
var i = 85;
if (i >= 90) {
    console.log("优秀");
}
else if (i >= 80) {
    console.log("良好");
}
else if (i >= 60) {
    console.log("及格");
}
else {
    console.log("不及格");
}
//输出结果为:良好
//[04] switch结构
//switch语句接受一个表达式，会将表达式的值和case语句进行匹配，然后执行关联的语句块。
//为提高代码的可读性，避免魔法数字等出现，常结合枚举类型组织代码结构
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
    Animal[Animal["Pig"] = 2] = "Pig";
})(Animal || (Animal = {}));
var animalType = Animal.Dog;
switch (animalType) {
    case Animal.Dog:
        console.log("Dog: 汪汪汪!!!");
        break;
    case Animal.Cat:
        console.log("Cat: 喵喵喵!!!");
        break;
    case Animal.Pig:
        console.log("Pig: 呵呵呵!!!");
        break;
    default:
        console.log("其他动物...");
}
