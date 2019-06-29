
// 2. Write code that will accept a number and convert it to the appropriate string representation for a check.
// Basic Requirements:

// Represent numbers to the hundredth position (pennies)
// Represent numbers at least to $999,999,999,999.99
// Example:

// Convert 2523.04 to "Two thousand five hundred twenty-three and 04/100 dollars"

// Have fun with these and take them step-by-step ensuring to check that everything works as expected along the way.

///////////My data of objects to reference
const onesObject = {
  //access value by onesObject[key]
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

const teenObject = {
  //this is when the tens place is a one which needs to be 
  1: "eleven",
  2: "twelve",
  3: "thirteen",
  4: "fourteen",
  5: "fifteen",
  6: "sixteen",
  7: "seventeen",
  8: "eighteen",
  9: "nineteen",
};

const tensObject = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};




var userCheck = 2523.04;
// var userCheck = document.getElementsByName("numberInput");

//convert to string
var userString = userCheck.toString(); ///"2523.04"
// var userString = JSON.stringify(userCheck);

//convert number to array
var userArray = Array.from(userString); ///(7) ["2", "5", "2", "3", ".", "0", "4"]

//get length of original so I know what I am working with
var originalLength = userArray.length; //7 for this case

function calculateCents(originalLength){
	var sliceAreaStart = originalLength - 2;
	var sliceAreaEnd = sliceAreaStart+2;
	//taking userArray and pulling out the last two items
	var cents = userArray.slice(sliceAreaStart,sliceAreaEnd); //pulls out ["0", "4"]
	//join array into string
	var stringCents = cents.join(""); //make string "04"
	// if the cents are 00 then the array doesn't include . //checking for that then I want cents to then equal string of 04/100 dollars 
	if(userArray.includes(".")){
		var results = stringCents +="/100 dollars";
	}else{
		var results = "dollars";
			}
	return results;
};

//function to determine conversion to wording
function convertTensWord(inputReverseArray){
  //determine tens place first
  if(inputReverseArray[1] == 1){
    var tensPlace = teenObject[inputReverseArray[0]]; //"thirteen"
    var tenOneString = `${tensPlace} and `;
  }else{
    ///section where tens place is anything but 1....problem what about 0s? 
    var onesPlace = onesObject[inputReverseArray[0]];
    var tensPlace = tensObject[inputReverseArray[1]];
    var tenOneString = `${tensPlace} ${onesPlace} and `;
  };
  return tenOneString;
};

//Now on to the dollars section and reversing it
function getOnlyDollars(){
  if(userArray.includes('.')){
    //third to last of array aka where the period is
    var periodPosition = originalLength - 3; //4
    userArray //array I want to adjust  ["2", "5", "2", "3", ".", "0", "4"] size 7
    
    //removing last 3 entries in array as I don't need them
    var dollarArray = userArray.slice(0, periodPosition); // (4) ["2", "5", "2", "3"]

    //reverse Array as I think it is easier to take each position starting with ones then tens then hundreds place
    var reverseArray = dollarArray.reverse(); //(4) ["3", "2", "5", "2"]
        
      //determining numbers starting with tens place
    var resultsTensOne =  convertTensWord(reverseArray);
  }else{
    var reverseArrayWithNoCents = userArray.reverse();
    //then need to do the same calculation on tens place but make it dry might pull it out of both calculations
    var resultsTensOne = convertTensWord(reverseArrayWithNoCents);

  };
  return resultsTensOne;
};

///how to do else if
function findMyNumberFool(x){
	if(x!==1 && x!==0){
		var result = x;
	} else if(x ==0){
		var result = (`Whoops it is ${x}`);
	}else{
		var result = (`your number is ${x}`);
	}
	return result;
};


//Report final result
var finalResultReport = getOnlyDollars() + calculateCents(originalLength);
function FinalWord(){
	document.getElementById('root').innerHTML = finalResultReport;
	
}