/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
var mysearch;
mysearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
myArray = ["bob", "tom"];
$(function () {
    var source = "this is ok";
    var subString1 = "ok";
    var substring2 = "not";
    var result1 = mysearch(source, subString1);
    var result2 = mysearch(source, substring2);
    alert(result1);
    alert(result2);
    $.each(myArray, function (key, val) {
        alert(val);
    });
});
