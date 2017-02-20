/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
var Employee = (function () {
    function Employee(msg) {
        this.username = msg;
    }
    Employee.prototype.getUserinfo = function () {
        return "welcome " + this.username;
    };
    return Employee;
}());
function printMsg() {
    var retMsg = "";
    var g = new Employee("tom");
    retMsg = g.getUserinfo();
    return retMsg;
}
var employ = new Employee('jjjj');
employ.fullName = "Long Long";
if (employ.fullName) {
    alert(employ.fullName);
}
$(function () {
    var result = printMsg();
    $("#msg").html("<span style='color:green;'>" + result + "<span>");
});
