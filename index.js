var recipes = {prop : 1}

function updateObjectWithKeyAndValue (object, key, value){
  recipes[key] = value
 return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key)
{
  var newobj = Object.assign({},object)
  delete  newobj.key
  return object;
}