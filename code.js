// var strings = ["hello", "MATT", "mastodon", "cat", "dog"];

// var stringResult = strings.filter((value)=>value.toLowerCase()=="matt");
// var stringIncludes = strings.filter((value)=>value.includes("a"));

// console.log({stringResult}, {stringIncludes});

// var element = document.getElementById('root');

// element = "George";

// const myArray = [1, 2, 3, 4];

// var result = myArray.filter((value, index, array) =>{
//   return value % 2 == 0;
// });


// console.log({myArray},{result});

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// var evenNumbers = numbers.filter((value)=>value%2==0);

// var oddNumbers = numbers.filter(value=>(value%2 !==0));

// console.log({numbers},{evenNumbers},{oddNumbers});

// const song = [
//   { id: 1, name: "Curl of the Burl", artist: "Mastondon" },
//   { id: 2, name: "Oblivion", artist: "Mastodon" },
//   { id: 3, name: "Flying Whales", artist: "Gojira" },
//   { id: 4, name: "L'Enfant Sauvage", artist: "Gojira" },
// ];

// function findMyJam(songArray, songPick) {
//   // var result = songArray.filter()
//   // var result = songArray.map(x => x.artist);
//   // var filterResult = result.filter((value)=>value.toLowerCase()=="gojira");
//   var result = songArray.filter((value)=>value.artist===songPick);
//   console.log(result);
//   return result;
// };

// findMyJam(song, "Gojira");

// function whatIsInAName(collection, source) {
//   // What's in a name?
  
//   var myKeys = Object.keys(source);

//   return collection.filter(function(obj){
//     for(var i =0; i<myKeys.length; i++){
//       if(!obj.hasOwnProperty(myKeys[i] || obj[myKeys[i]] !== source[myKeys[i]])){
//         return false;
//       }
//     } 
//     return true; 
//   })


//    // Only change code below this line
//   ///collection new array out of object 
//   // var newArray = Object.values(collection);
//   // console.log({newArray}, {source});
//   // var newArrayFromObject = newArray.map(x=>Object.values(x));
//   // console.log({newArrayFromObject});

//   // //sourceResult is the capulet in array
//   // var sourceResult = Object.values(source);
//   // console.log({sourceResult});

//   // var arr = collection.filter((value, index, array)=>array.includes(source));
  
//   // Only change code above this line
//   return newArray;
// }

// result = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// console.log({result});


// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   var srcKeys = Object.keys(source);

//   return collection.filter(function (obj) {
//     return srcKeys.every(function (key) {
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//     });
//   });
// }

// test here

var myKeys = Object.keys({ last: "Capulet" });

console.log({myKeys});
var karenResult = myObject.filter(function(obj){
  return myKeys.every(function (key){
    return obj.hasOwnProperty(key) && obj[key] === source[key];
  });
});


console.log({karenResult}); 



var myObject = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
var source = { last: "Capulet" };
console.log(karenResult);

myObject.findIndex(x=>Object.values(x)==0);


///This below will solve it but just for that problem
myObject.findIndex(x=>x.last=="Capulet");
myObject.findIndex(x=>x.last ==Object.values(source));



//////////////////

	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id: 432534, time: 65876586 }]
		}
	],

// newReleases.findIndex(x=>x.id==675465);
newReleases.map(x=>Object.values(x).filter(x=>x=="Fracture"));
//answer from the above is 3!!! works 
////////////Other testing


function makeSandwichWith(meat){
	var sandwich = "";
	sandwich += "bread";
	sandwich += ' ';
	sandwich += meat;
	sandwich += ' ';
	sandwich += "bread";
	return sandwich;

};

var todos =[];

// function sayHiTo(person){
// 	console.log(`Hi, ${person}!`);
// }

function findMyNumberFool(x){
	if(x!==1 && x!==0){
		var result = x;
	} else if(x ==0){
		var result = (`Whoops it is ${x}`);
	}else{
		var result = (`your number is ${x}`);
	}
	return result;
}

var newArray = [0, 1, 0, 0, 4];
newArray.map(x=> (!newArray[x]==0) ? console.log(${newArray[x]}) : console.log("nope"));