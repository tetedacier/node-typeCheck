typeCheck
=========

This module allow you to simply retrieve the type of a given variable.
It supply an unified utility which does not exists in ECMAScript.

Usage
-----

There's two main usage of this little utility module.

In this case a type has been provided to the *typeCheck* *is* method, so it return a boolean value indicating if the provided type name match the *typeCheck* argument type.

```
var typeCheck = require('typeCheck');

function myFunction(myArgument){
  if(typeCheck(myArgument).is("Undefined")){
    console.warn("'myArgument' is undefined");
  }
}
myFunction();
```

During evaluation, it will ouput the following message:

```'myArgument' is undefined
```

The second case occurs when no argument is provided to the *typeCheck* *is* method. In this case it return the type name as string. Considering the following blocks:

```var typeCheck = require('typeCheck');

function mySpecialConstructor(){
  this.version = "3.14";
}
function myFunction(myArgument){
  switch(typeCheck(myArgument).is()){
    case "Undefined":
      console.log("Undefined argument has been provided to 'myFunction'.");
      break;
    case "mySpecialConstructor":
      console.log("The argument provided to 'myFunction' is the " + (new myArgument()).version + " version of the contructor.");
      break;
    case "NaN":
      console.log("The operation which lead to the value stored in the variable 'myArgument' does not seems to be a legit one.")
      break;
  }
}
```

Executing the following code:

```myFunction(mySpecialConstructor);
```

produce the following output:

```The argument provided to 'myFunction' is the 3.14 version of the contructor.
```
