/**
 * Created by Administrator on 2017/2/6.
 */

var App = App || {};
(function () {
    'use strict';
    function App() {

    }

    return App;
})();

(function (App) {
    var MsgHelper = (function () {
        function MsgHelper() {

        }
        MsgHelper.prototype.init = function () {
            console.info('init........');
        };
        return MsgHelper;
    })();
    App.MsgHelper = MsgHelper;
})(App);

var msg=new App.MsgHelper();
msg.init();