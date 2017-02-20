/**
 * Created by Administrator on 2017/2/17.
 */
var isFlag:boolean=false;
var orderNumber:number=100;
var userName:string="hello,world";
var list:number[]=[1,2,3];
var list1:Array<number>=[4,5,6];
enum  Corlor{Red,Green,Blue};
var c1:Corlor=Corlor.Red;
//---------手动枚举所有值都设置--------------------/
// /默认枚举类型其实数值从 0 开始，
// 你可以可用手动设置某一个成员的数值。
// 例如我们可以将上文 的起始值定为 1：
enum Color1 {Red = 1, Green = 2, Blue = 4};
var c2: Color1 = Color1.Green;
//---------手动设置全部的枚举成员：--------------------
enum Color2 {Red = 1, Green, Blue};
var colorName: string = Color2[2];
alert(colorName);