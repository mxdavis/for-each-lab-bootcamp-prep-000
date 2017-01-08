function iterativeLog(array){
  array.forEach(element => {
    console.log(`${array.indexOf(element)}: ${element}`)
  })
}

function iterate(callback){
  var newArray = ["Shira", "Avrumi", "Yitz", "Moish", "Chaim"]
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback){
  array.forEach(callback)
  return array
}
