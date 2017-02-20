/**
 * Created by Administrator on 2017/2/17.
 */
/// <reference path="plugins/typescript/typings/jquery.d.ts"/>

function setTableRowHtml1():void{
    var userName:string="";
    $("tr").each(function(){
        userName=$(this).find("td:eq(1)").html();
    });
    alert(userName);
}
function  setTableRowHtml2():string{
    var username:string="";
    $("tr").each(function(){
        username=$(this).find("td:eq(1)").html();
    });
    return username;
}
$(function () {
    setTableRowHtml1();
    var username=setTableRowHtml2();
    alert(username);
});