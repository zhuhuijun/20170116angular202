/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
function getUserInfo(user) {
    return user.age + "==============" + user.userName;
}
var userObj = { userName: '周伯通', age: 100 };
$(function () {
    var userinfo = getUserInfo(userObj);
    console.info(userinfo);
});
