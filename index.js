var object = {prop : 1}

function updateObjectWithKeyAndValue (object, key, value){
 recipes[key] = value
 return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  var newRecipe = Object.assign({key: value}, object)
  return newRecipe;
}