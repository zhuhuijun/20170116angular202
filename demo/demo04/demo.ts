/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
interface searchFunt {
    (source:string, subString:string):boolean;
}
var mysearch:searchFunt;
mysearch = function (source:string, subString:string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }

};
/**
 * 数组接口
 */
interface StringArray{
    [index:number]:string;
}
var myArray:StringArray;
myArray=["bob","tom"];
$(function(){
    var source:string="this is ok";
    var subString1:string="ok";
    var substring2:string="not";
    var result1=mysearch(source,subString1);
    var result2=mysearch(source,substring2);
    alert(result1);
    alert(result2);
    $.each(myArray,function(key,val){
        alert(val);
    });
});