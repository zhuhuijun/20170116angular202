/**
 * Created by Administrator on 2017/2/20.
 */
    /// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
class Employee {
    fullName:string;
    username:string;

    constructor(msg:string) {
        this.username = msg;
    }

    getUserinfo() {
        return "welcome " + this.username;
    }
}

function printMsg():string {
    var retMsg:string = "";
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
    var result=printMsg();
    $("#msg").html("<span style='color:green;'>"+result+"<span>");
})