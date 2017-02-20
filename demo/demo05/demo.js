/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    ;
    return Clock1;
}());
var cs = Clock1;
var newClock = new cs(7, 10);
console.info(newClock);
