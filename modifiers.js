/*class publicModifier{

    public var_one:String;
     constructor()
    {
        this.var_one="helloooooo";
    }
    public fun_one():String{
        return this.var_one;
    };
};
class subClass extends publicModifier{};
let objOfSubClass:subClass= new subClass();
console.log(objOfSubClass.fun_one(),objOfSubClass.var_one);*/
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
/*class publicModifier{

    private var_one:String;
    private constructor()
    {
        this.var_one="helloooooo";
    }
    private fun_one():String{
        return this.var_one;
    };
};
class subClass extends publicModifier{};
let objOfSubClass:subClass= new subClass();
console.log(objOfSubClass.fun_one(),objOfSubClass.var_one);*/
var protectedClass1 = /** @class */ (function () {
    function protectedClass1() {
        this.var_one = "Hello";
    }
    protectedClass1.prototype.fun_one = function () {
        return "Hello_2";
    };
    ;
    return protectedClass1;
}());
;
var protectedClass2 = /** @class */ (function (_super) {
    __extends(protectedClass2, _super);
    function protectedClass2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var_two = _this.var_one;
        return _this;
    }
    protectedClass2.prototype.my_fun = function () {
        return this.fun_one();
    };
    ;
    return protectedClass2;
}(protectedClass1));
;
console.log(new protectedClass2().my_fun());
