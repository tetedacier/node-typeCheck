
var
  deps = {
    util: require('util')
  },
  xRegExp = require('xregexp').XRegExp,
  fs=require('fs')
;
//delete require.cache[require.resolve('/path/to/module.js')]
function getTypeOf(name, value) {
  var ObjectHinting = {
    LitteralObjectMatcher : /^\s*function\s*(Object)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    ArrayMatcher : /^\s*function\s*(Array)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    DateMatcher : /^\s*function\s*(Date)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    EngineNativeTypeMatcher : /^\s*function\s*(\w+)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    ConstructedTypeMatcher : /^(?:\s|\n)*function(?:\s|\n)*(\w+)(?:\s|\n)*\(/m
  }
  var HintResult = [];
  var HintString = "";
  HintString = name + " : ";
  if ("object" === typeof value) {
    if (null === value) {
      HintString += "Null";
    }
    else{
      for (var m in ObjectHinting) {
        HintResult = value.constructor.toString().match(ObjectHinting[m]);
        if(null !== HintResult){
          HintString += HintResult[1];
          break;
        }
      }
    }
    HintResult = [];

  }
  else{
    if(undefined === value){
      HintString += "Undefined";
    }
    else{
      if (("number" ===  typeof value) && ("NaN" === value.toString())) {
        HintString += "NaN";
      }
      else{
        HintString += (typeof value).substr(0,1).toUpperCase() + (typeof value).substr(1);
      }
    }
  }
  return HintString;
}
function PrototypeObjectConstructor(args) {
  this.version = "0.0.1b";
  return function(){}
}

function ObjectConstructor(args) {

  this.constructor = PrototypeObjectConstructor;
  //code
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
  for (var i in List) {
    //deps.util.debug(getTypeOf(i, List[i]));
  }
}
//testing prototypal behavior
var tObjectorConstructor = new ObjectConstructor("a");
deps.util.debug(tObjectorConstructor.version + "\n");

testGetTypeOf({
  ObjectLitteral :            {length: 1},
  RegExpLitteral :            /\w+/m,
  ConstructedRegExpLitteral : new RegExp(/\w+/m),
  RealObjectLitteral :        new ObjectConstructor(),
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
});

//////////////////////////// real code below

function endConsumption(processList,finalCallback) {
  if (processList) {
    //code
  }
  return function(){

  }
}
