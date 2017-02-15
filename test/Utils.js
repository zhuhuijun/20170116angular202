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

var msg = new App.MsgHelper();
msg.init();

window.onload=function(){
    document.body.innerHTML = "jojo";

    setTimeout(function () {
        var html=`<p>1 1
        2</p>
        3

        
        4`;
        document.body.innerHTML =html;
        console.log(html);
    },1000);
}
