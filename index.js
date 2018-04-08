var recipes = {prop : 1}

function updateObjectWithKeyAndValue (object, key, value){
  recipes[key] = value
 return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  Object.assign({"key": value},recipes) 
}

