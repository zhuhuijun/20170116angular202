/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>

interface IClock{
    currentTime:Date;
    setTime(d:Date);
}

class Clock implements IClock{
    currentTime:Date;
    constructor(h:number,m:number){

    }
    setTime(d:Date){
        this.currentTime=d;
    }
}

interface IClock1{
    new (hour:number,minute:number);
}
class Clock1{
    currentTime:Date;
    constructor(h:number,m:number){

    };
}

var cs:IClock1=Clock1;
var newClock=new cs(7,10);
console.info(newClock);