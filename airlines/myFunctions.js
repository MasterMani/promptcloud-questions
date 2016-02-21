var levDistance = require('levenshtein');

function lineReader(text){
  var linesArr = [];
  text.toString().split("\n").forEach(function(e, i){
    linesArr.push(e.trim());
  });
  return linesArr;
}

function findAND(arr1, arr2){
  var andArr = [];
  for(var i = 0; i < arr1.length; i++){
    for (var j = 0; j < arr2.length; j++) {
      if(arr1[i] == arr2[j]) andArr.push(arr1[i]);
    };
  }
  return andArr;
}

function findOR(arr1, arr2){
  var orArr = arr1;
  arr2.forEach(function(e, i){
    if(orArr.indexOf(e) == -1) orArr.push(e);
  });
  return orArr;
}

function findNOT(arr1, arr2){
  var notArr = [];
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if(arr1[i] == arr2[j]) break;
      if(j == arr2.length -1) notArr.push(arr1[i]);
    }
  }
  return notArr;
}

function printArr(arr){
  arr.forEach(function(e){
    console.log(e);
  });
  console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
}

function isMatching(str1, str2){
  var cmpr = new levDistance(str1, str2);
  return cmpr.distance < 2 ? true : false;
}

function isPairMatching(pair1, pair2){
  var pair1Arr = pair1.split(','),
    pair2Arr = pair2.split(','),
    isStartCitiesMatched = isMatching(pair1Arr[0], pair2Arr[0]),
    isEndCitiesMatched = false;
    
    if(!isStartCitiesMatched) return false;
    isEndCitiesMatched = isMatching(pair1Arr[1], pair2Arr[1]);
    if(!isEndCitiesMatched) return false;
    return true;
}

module.exports = {
  lineReader : lineReader,
  findAND : findAND,
  findOR : findOR,
  findNOT : findNOT,
  printArr : printArr,
  isMatching : isMatching,
  isPairMatching : isPairMatching
}