var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2017/2/6.
 */
var Example;
(function (Example) {
    var Auto = (function () {
        function Auto(mph, wheels, doors) {
            if (mph === void 0) { mph = 0; }
            if (wheels === void 0) { wheels = 4; }
            this.mph = mph;
            this.wheels = wheels;
            this.doors = doors;
        }
        Auto.prototype.drive = function (speed) {
            this.mph += speed;
        };
        Auto.prototype.stop = function () {
            this.mph = 0;
        };
        return Auto;
    }());
    var Motorcycle = (function (_super) {
        __extends(Motorcycle, _super);
        function Motorcycle() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.doors = 0;
            _this.wheels = 2;
            return _this;
        }
        return Motorcycle;
    }(Auto));
    Example.Motorcycle = Motorcycle;
})(Example || (Example = {}));
var bike = new Example.Motorcycle();
