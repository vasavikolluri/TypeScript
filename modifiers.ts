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
class protectedClass1{
    protected var_one:string = "Hello";
    protected fun_one():string{
        return "Hello_2";
    };
};

class protectedClass2 extends protectedClass1{
    var_two = this.var_one;
    my_fun():string{
        return this.fun_one();
    };
};

console.log(new protectedClass2().my_fun()); 