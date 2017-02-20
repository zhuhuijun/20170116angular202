/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
class Greeter {
    static standardGreeting = "heool,there";
    greeting:string;

    greet():string {
        if (this.greeting) {
            return "Hello , " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}
var greeter1:Greeter;
greeter1 = new Greeter();
alert(greeter1.greet());

var greeterMake:typeof Greeter = Greeter;
greeterMake.standardGreeting = "hey,there!";
var greeter2:Greeter = new greeterMake();
alert(greeter2.greet());


