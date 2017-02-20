/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

var strings = ["Hello", "98052", "101"];
var validators:{[s:string]:Validation.StringValidator;} = {};
validators['Zip Code'] = new Validation.ZipCodeValidator();//这个是验证邮政 编码
validators['Letters only'] = new Validation.LettersOnlyValidator();//这个是 验证英文


function showMsg():void {
//显示每个字符串是否通过每个验证
    strings.forEach(s => {
        for (var name in validators) {
            console.info('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
            $("#msg1").html('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
}
$(document).ready(function () {
    showMsg();
});