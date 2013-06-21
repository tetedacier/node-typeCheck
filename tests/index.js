var
  typeCheck = require('../index.js')
  , fs = require('fs')
  , assert = require('assert')
  , attendedGetTypeOfList = fs.readFileSync("tests/getTypeOfList.attended-result").toString()
  , typeList = {
    ObjectLitteral :            {length: 1},
    RegExpLitteral :            /\w+/m,
    ConstructedRegExpLitteral : new RegExp(/\w+/m),
    RealObjectLitteral :        new FunctionAsObjectConstructor(),
    ArrayLitteral :             [],
    StringLitteral :            "string",
    NumberLitteral :            .67,
    MathLitteral :              Math,
    BooleanLitteral :           true,
    DateLitteral :              new Date(),
    FunctionLitteral :          function(){},
    ErrorLitteral :             returnError(),
    NullLitteral :              null,
    UndefinedLitteral :         undefined,
    NaNLitteral :               NaN,
    NaNConstructedLitteral :    1/"lll"
  }
;

function FunctionAsObjectConstructor(args) {
  this.version = "1.0";
}
function returnError() {
  var innertTest = null;
  try{
    var failure = innertTest.constructor;
    return failure;
  }
  catch(e){
    return e;
  }
}
function testGetTypeOf(List) {
  var testedTypeChecked = "";
  for (var i in List) {
    testedTypeChecked += i + ':' + typeCheck(List[i]).is() + "\n";
  }
  assert(testedTypeChecked === attendedGetTypeOfList, 'some type check fails')
}
testGetTypeOf(typeList);
