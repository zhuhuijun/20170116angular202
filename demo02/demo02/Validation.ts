/**
 * Created by Administrator on 2017/2/20.
 */
module Validation {
    export interface StringValidator {
        //是否接受.
        isAcceptable(s:string): boolean;
    }
}