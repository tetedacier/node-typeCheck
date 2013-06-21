
module.exports = function(checkedVariable){
  return {
    is: function(typeString){
      if(undefined === typeString){
        return getTypeOf(checkedVariable);
      }
      else{
        return (typeString === getTypeOf(checkedVariable));
      }
    }
  }
}
//delete require.cache[require.resolve('/path/to/module.js')]
function getTypeOf(value) {
  var ObjectHinting = {
    LitteralObjectMatcher : /^\s*function\s*(Object)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    ArrayMatcher : /^\s*function\s*(Array)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    DateMatcher : /^\s*function\s*(Date)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    EngineNativeTypeMatcher : /^\s*function\s*(\w+)\s*\(\s*\)\s*\{\s*\[native\s*code]\s*}\s*$/,
    ConstructedTypeMatcher : /^(?:\s|\n)*function(?:\s|\n)*(\w+)(?:\s|\n)*\(/m
  }
  var HintResult = [];
  var HintString = "";
  if ("object" === typeof value) {
    if (null === value) {
      HintString = "Null";
    }
    else{
      for (var m in ObjectHinting) {
        HintResult = value.constructor.toString().match(ObjectHinting[m]);
        if(null !== HintResult){
          HintString = HintResult[1];
          break;
        }
      }
    }
  }
  else{
    if(undefined === value){
      HintString = "Undefined";
    }
    else{
      if (("number" ===  typeof value) && ("NaN" === value.toString())) {
        HintString = "NaN";
      }
      else{
        HintString = (typeof value).substr(0,1).toUpperCase() + (typeof value).substr(1);
      }
    }
  }
  return HintString;
}
