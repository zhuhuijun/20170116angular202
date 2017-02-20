/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>

interface IShape {
    color:string;
}

interface PenStroke {
    penWidth:number;
}

interface ISquare extends IShape,PenStroke {
    sideLength:number;
}


interface Counter {
    (start:number):string;//声明一个开始变量
    interval:number;//声明一个间隔变量
    reset():void;//声明一个重置方法
}

var c:Counter;
c(10);
c.interval = 5.0;
c.reset();
var square = <ISquare>{};
square.color = "red";
square.sideLength = 100;
square.penWidth = 59;