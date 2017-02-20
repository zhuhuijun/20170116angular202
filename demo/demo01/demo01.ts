/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
var colorList:Array<any> = ['red', 'green', 'blue'];//any不知道类型
/***
 * 测试数组打印
 */
function testArray():void {
    $.each(colorList, function (key, val) {
        console.info(key + '======' + val);
    });
    $(colorList).each(function (key, val) {
        console.info(key + '======' + val);
    });
}

function setTableRowColor():void {
    $("tr").each(function () {
        $(this).find("td:eq(1)").css({color: 'red', background: 'blue'});
    })
}
function setTableRowColor1():void {
    $("tr").each(function () {
        for (var i = 0; i < colorList.length; i++) {
            if (i == 1) {
                $(this).find("td:eq(1)").css({color: colorList[i], background: colorList[i + 1]});
            }
        }

    })
}

$(document).ready(function(){
    testArray();
    setTableRowColor();
})