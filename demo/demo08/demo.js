var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
var Person = (function () {
    function Person(paramVal) {
        this.userName = paramVal;
    }
    Person.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        return this.userName + "\n" + age;
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(username) {
        return _super.call(this, username) || this;
    }
    Student.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + "\n" + age + "岁" + "\n\t\t" + "默认信息：" + superMsg;
    };
    return Student;
}(Person));
$(function () {
    var stu1 = new Student("周伯通");
    var stu2 = new Student("老毒物");
    var stuMsg1 = stu1.getPersonInfo();
    var stuMsg2 = stu2.getPersonInfo(80);
    $("#msg1").html("<span style='color:red;'>" + stuMsg1 + "<span>");
    $("#msg2").html("<span style='color:blue;'>" + stuMsg2 + "<span>");
});
