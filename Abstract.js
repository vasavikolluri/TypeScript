/*abstract class class1{
    fun_one():any{
        return "hello1";
    };
    abstract fun_two():any;
};
class class2 extends class1{
    fun_two():any{
   return "hello2";
    };
};

let obj_1:class2 = new class2();
console.log(obj_1.fun_one(),obj_1.fun_two());*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class1 = /** @class */ (function () {
    function class1() {
    }
    return class1;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_one = "hello";
        return _this;
    }
    return class_two;
}(class1));
;
console.log(new class_two().var_one);
