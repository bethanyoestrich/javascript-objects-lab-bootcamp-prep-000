var recipes = {prop : 1}

function updateObjectWithKeyAndValue (object, key, value){
 object[key] = value
 return object;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  var newRecipe = Object.assign({key: value}, object)
  return newRecipe;
}