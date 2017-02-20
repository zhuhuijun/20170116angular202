/**
 * Created by Administrator on 2017/2/20.
 */
/// <reference path="Validation.ts" />

module Validation {
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s:string) {
            return lettersRegexp.test(s);
        }
    }
}