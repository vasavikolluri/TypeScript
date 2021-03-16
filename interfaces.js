/*interface interface1{
    var_one:String;
    var_two:String;
};
let obj1:interface1 = {
    var_one:"ang11",
    var_two:"nodeJs"
};
let obj2:interface1 = {
    var_one:"Java",
    var_two:".net"
};
class class_one implements interface1{
    var_one:String="vueJs";
    var_two:String="mysql";
};
console.log( obj1.var_one,obj1.var_two);
console.log( obj2.var_one,obj2.var_two);

let obj3:class_one =new class_one();
console.log( obj3.var_one,obj3.var_two);*/
;
var obj = {
    fun_one: function () {
        return "Hello_1";
    },
    fun_two: function () {
        return 200;
    },
    fun_three: function () {
        return { "key1": "Hello_2" };
    }
};
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.fun_one = function () {
        return "this is fun_one()";
    };
    ;
    class_one.prototype.fun_two = function () {
        return 100;
    };
    ;
    class_one.prototype.fun_three = function () {
        return { "key1": "fun_three() json data" };
    };
    ;
    return class_one;
}());
;
var obj1 = new class_one();
console.log(obj1.fun_one(), obj1.fun_two(), obj1.fun_three());
