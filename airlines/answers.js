//Answers for question 1 
var fs = require('fs'),
  file_1_text = fs.readFileSync(__dirname + '/q1-cities1.txt'),
  file_2_text = fs.readFileSync(__dirname + '/q1-cities2.txt'),
  wordsArr_1 = lineReader(file_1_text),
  wordsArr_2 = lineReader(file_2_text);

//Printing common words between both files
var andAnswer = findAND(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present in both files \n");
printArr(andAnswer);

//Printing the words only in file_1 not in file_2
var notAnswer = findNOT(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present only in file_1 not in file_2 \n");
printArr(notAnswer);

//Printing the words either in file_1 or file_2
var orAnswer = findOR(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present in file_1 or file_2 \n");
printArr(orAnswer);

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//

//Answers for question 2
var spicejetText = fs.readFileSync(__dirname + '/spicejet.txt' ),
    indigoText = fs.readFileSync(__dirname + '/Indigo.txt'),
    spicejetLocations = lineReader(spicejetText),
    indigoLocatoins = lineReader(indigoText);

var commonLocations = findAND(spicejetLocations, indigoLocatoins);
console.log("Below are the pair of list of locations where both flights are availbale:");
printArr(commonLocations);

var onlySpicejet = findNOT(spicejetLocations, indigoLocatoins);
console.log("Below are the pair of cites have only spicejet airlines sercive");
printArr(onlySpicejet);

var onlyIndigo = findNOT(indigoLocatoins, spicejetLocations);
console.log("Below are the pair of cites have only Indigo airlines sercive");
printArr(onlyIndigo);


function printArr(arr){
  arr.forEach(function(e){
    console.log(e);
  });
  console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
}

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