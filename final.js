/*namespace classNamespac1{
    export let  var_one:string="Hello vasavi";
}*/
/*namespace AshokIT{
        export let wish:string = `welcome to ecommerce application`;
    };*/
/*namespace classNamespac1{
    export namespace class_ONE{
    export let  var_one:string="Hello vasavi";
    export let  var_two:string="Hello vasa";
    export let  var_three:string="Hello va";
};
}*/
var classNamespac1;
(function (classNamespac1) {
    function fun_one() {
        return "Angular12";
    }
    classNamespac1.fun_one = fun_one;
    ;
    function fun_two() {
        return "Angular12";
    }
    classNamespac1.fun_two = fun_two;
    ;
    function fun_three() {
        return "Angular12";
    }
    classNamespac1.fun_three = fun_three;
    ;
})(classNamespac1 || (classNamespac1 = {}));
;
/*/// <reference path="nameSpace1.ts" />

console.log(classNamespac1.var_one);*/
/* /// <reference path="nameSpace1.ts" />
console.log( AshokIT.wish );*/
/// <reference path="nameSpace1.ts" />
/*console.log( classNamespac1.class_ONE.var_one,classNamespac1.class_ONE.var_two,classNamespac1.class_ONE.var_three );*/
///  <reference path="nameSpace1.ts" />
console.log(classNamespac1.fun_one(), classNamespac1.fun_two(), classNamespac1.fun_three());
