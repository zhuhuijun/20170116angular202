/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="Validation.ts" />
module Validation {
    //匹配 0-9 的数字.
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s:string) {
            //如果长度=5 并且是数字就返回一个 true
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}