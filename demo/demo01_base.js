/**
 * Created by Administrator on 2017/2/17.
 */
var isFlag = false;
var orderNumber = 100;
var userName = "hello,world";
var list = [1, 2, 3];
var list1 = [4, 5, 6];
var Corlor;
(function (Corlor) {
    Corlor[Corlor["Red"] = 0] = "Red";
    Corlor[Corlor["Green"] = 1] = "Green";
    Corlor[Corlor["Blue"] = 2] = "Blue";
})(Corlor || (Corlor = {}));
;
var c1 = Corlor.Red;
//---------手动枚举所有值都设置--------------------/
// /默认枚举类型其实数值从 0 开始，
// 你可以可用手动设置某一个成员的数值。
// 例如我们可以将上文 的起始值定为 1：
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
;
var c2 = Color1.Green;
//---------手动设置全部的枚举成员：--------------------
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
var colorName = Color2[2];
alert(colorName);
