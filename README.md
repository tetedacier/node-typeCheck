typeCheck
=========

This module allow you to simply retrieve the type of a given variable.
It supply an unified utility which does not exists in ECMAScript.

Usage
-----

There's two main usage of this little utility module.

In this case a type has been provided to the *typeCheck* *is* method, so it return a boolean value indicating if the provided type name match the *typeCheck* argument type.

```javascript
var typeCheck = require('typeCheck');

function myFunction(myArgument){
  if(typeCheck(myArgument).is("Undefined")){
    console.warn("'myArgument' is undefined");
  }
}
myFunction();
```

During evaluation, it will ouput the following message:
```javascript
'myArgument' is undefined
```

The second case occurs when no argument is provided to the *typeCheck* *is* method. In this case it return the type name as string. Considering the following blocks:

```javascript
var typeCheck = require('typeCheck');

function mySpecialConstructor(){
  this.version = "3.14";
}
function myFunction(myArgument){
  switch(typeCheck(myArgument).is()){
    case "Undefined":
      return UndefinedFactory(myArgument);
      break;
    case "mySpecialConstructor":
      return mySpecialConstructorFactory(myArgument);
    case "NaN":
      return NaNFactory(myArgument);
  }
}
```

Executing  `myFunction(mySpecialConstructor);` `myFunction` would return a 'factorised' version of the argument provided.
