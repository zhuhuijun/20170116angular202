/**
 * Created by Administrator on 2017/2/20.
 */
    /// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
class Person {
    userName:string;

    constructor(paramVal:string) {
        this.userName = paramVal;
    }

    getPersonInfo(age:number = 120):string {
        return this.userName + "\n" + age;
    }
}
class Student extends Person{
    constructor(username:string){
        super(username);
    }
    getPersonInfo(age=120){
        var superMsg=super.getPersonInfo(age);
        return this.userName+"\n"+age+"岁"+"\n\t\t"+"默认信息：" +superMsg;
    }
}
$(function () {
    var stu1=new Student("周伯通");
    var stu2=new Student("老毒物");
    var stuMsg1=stu1.getPersonInfo();
    var stuMsg2=stu2.getPersonInfo(80);
    $("#msg1").html("<span style='color:red;'>"+stuMsg1+"<span>");
    $("#msg2").html("<span style='color:blue;'>"+stuMsg2+"<span>");
});