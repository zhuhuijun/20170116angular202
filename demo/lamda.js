/**
 * Created by Administrator on 2017/2/6.
 */
var shape = {
    name: "rectangle",
    popup: function () {
        var _this = this;
        console.log('This inside popup(): ' + this.name);
        setTimeout(function () {
            console.log('This inside setTimeout(): ' + _this.name);
            console.log("I'm a " + _this.name + "!");
        }, 3000);
    }
};
shape.popup();
