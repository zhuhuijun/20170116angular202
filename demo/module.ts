/**
 * Created by Administrator on 2017/2/6.
 */
module Example {
    class Auto{
        constructor(public mph : number = 0,
                    public wheels = 4,
                    public doors?){
        }
        drive(speed){
            this.mph += speed;
        }
        stop(){
            this.mph = 0;
        }
    }
    export class Motorcycle extends Auto
    {
        doors = 0;
        wheels = 2;
    }
}
var bike = new Example.Motorcycle();