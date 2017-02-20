/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="../plugins/typescript/typings/jquery.d.ts"/>
/**
 * 声明一个接口
 */
interface IUserinfo{
    age:any;
    userName:String;
}

function getUserInfo(user:IUserinfo):string{
    return user.age+"=============="+user.userName;
}

var userObj={userName:'周伯通',age:100};
$(function(){
    var userinfo:string=getUserInfo(userObj);
    console.info(userinfo);
})