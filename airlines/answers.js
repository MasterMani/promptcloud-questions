var logics = require('./myFunctions'),
  fs = require('fs'),
  file_1_text = fs.readFileSync(__dirname + '/q1-cities1.txt'),
  file_2_text = fs.readFileSync(__dirname + '/q1-cities2.txt'),
  wordsArr_1 = logics.lineReader(file_1_text),
  wordsArr_2 = logics.lineReader(file_2_text);


//Answers for question 1 
// Printing common words between both files
var andAnswer = logics.findAND(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present in both files \n");
logics.printArr(andAnswer);

// Printing the words only in file_1 not in file_2
var notAnswer = logics.findNOT(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present only in file_1 not in file_2 \n");
logics.printArr(notAnswer);

// Printing the words either in file_1 or file_2
var orAnswer = logics.findOR(wordsArr_1, wordsArr_2);
console.log("Below are the list of words present in file_1 or file_2 \n");
logics.printArr(orAnswer);

//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//

//Answers for question 2
var spicejetText = fs.readFileSync(__dirname + '/spicejet.txt' ),
    indigoText = fs.readFileSync(__dirname + '/Indigo.txt'),
    spicejetLocations = logics.lineReader(spicejetText),
    indigoLocatoins = logics.lineReader(indigoText);

var commonLocations = logics.findAND(spicejetLocations, indigoLocatoins);
console.log("Below are the pair of list of locations where both flights are availbale:");
logics.printArr(commonLocations);

var onlySpicejet = logics.findNOT(spicejetLocations, indigoLocatoins);
console.log("Below are the pair of cites have only spicejet airlines sercive");
logics.printArr(onlySpicejet);

var onlyIndigo = logics.findNOT(indigoLocatoins, spicejetLocations);
console.log("Below are the pair of cites have only Indigo airlines sercive");
logics.printArr(onlyIndigo);


//<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>//

//Answer for question 3

var exampleArr1 = ["AHMEDABAD0,AGARTALA","DELHI,AGARTALA","AGARTALA,AHMEDABAD","MUMBAI,AHMEDABAD","BHUBANESHWAR,BENGALORU","DELHI,BENGALOORU","JAIPUR,BENGALOORU","KOLKATA,BENGALOORU","LUCKNOW,BENGALOORU","MUMBAI,BENGALOORU"],
    exampleArr2 = ["AGARTALA,AHMEDABAD","AGARTALA,HYDERABAD","AHMEDABAD,AGARTALA9","AHMEDABAD,MUMBAI","BENGALOORU,DELHI","BENGALOORU,HYDERABAD","BHUBANESHWAR,BENGALOORU","BHUBANESHWAR,MUMBAI","CHENNAI,DELHI","CHENNAI,GUWAHATI"],
    matchingArr = [];

exampleArr1.forEach(function(e, i){
  exampleArr2.forEach(function(f, j){
    var result = logics.isPairMatching(e, f);
    if(result) matchingArr.push(e + " == " + f)
  });
});

console.log("Below are the pair of cites matched by using levenshtein method");
logics.printArr(matchingArr);