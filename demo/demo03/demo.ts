/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>


interface SquareConfig{
    color?:string;
    width:number;
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    var newSquare={color:'white',area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=newSquare.area*config.width;
    }
    return newSquare;
}

var mySquare1=createSquare({color:'red'});
var mysquare2=createSquare({color:'red'});
console.info(mySquare1.color+"=="+mySquare1.area);
console.info(mysquare2.color+"=="+mysquare2.area);

var mysquare3=createSquare({color:'yellow',width:80});
console.info(mysquare3.color+"=="+mysquare3.area)