'use strict';

//Welcomes the user interactivelly
var userName = prompt('Hi there, Welcome to my webpage. Could you please fill in your name and answer the following fun quizes');
console.log('User Name supplied:', userName);
alert('Thank you '+ userName +' take part in the following activities to get to know me.' );


//The guessing game starts here

//Question1
var continentsVisited = prompt('Have I visited all 5 continents?').toLowerCase();
console.log('will accept yes or no answer:', continentsVisited);

if(continentsVisited ==='yes'|| continentsVisited === 'y' ){
  alert('Nope, '+ userName +' I am still to visit a couple..!!');
} else {
  alert('Hey '+userName+' that\'s true I am still to do that.');
}

//Question2
var favouriteMovie = prompt('Do I have a favourite movie?').toLowerCase();
console.log('will accept yes or no answer:', favouriteMovie);

if(favouriteMovie === 'no'|| favouriteMovie === 'n' ){
  alert(userName + ' You are right, I dont like movies that much!!');
} else {
  alert('That\'s unfortunately not true, '+ userName);
}

//Question3
var petsOwned = prompt('Do I own any pets?').toLowerCase();
console.log('will accept yes or no answer:', petsOwned);

if(petsOwned === 'yes'|| petsOwned === 'y' ){
  alert('Nope, Unfotunately I love travelling too much to give enough attention to a pet');
} else {
  alert('That\'s true I do not own a pet - I spend too much time on planes.');
}

//Question4
var teamSupported = prompt('Do I support Liverpool Football Club?').toLowerCase();
console.log('will accept yes or no answer:'+teamSupported);

if(continentsVisited === 'no'|| continentsVisited === 'n' ){
  alert('Are they any other teams...'+ userName + '???...YNWA.');
} else {
  alert('Definitely, '+ userName +', I support Liverpool FC...YNWA...!!!');
}

//Question4
var travelQuestion = prompt('Do I like travelling?').toLowerCase();
console.log('will accept yes or no answer:', travelQuestion);

if(travelQuestion === 'yes'|| travelQuestion === 'y' ){
  alert('Definitely, '+ userName +', you bet...!!!');
} else {
  alert('There\'s so much of the world to see.'+ userName + ', travelling is brilliant.');
}

//Question5
var placeOfBirth = prompt('Was I born in Asia?').toLowerCase();
console.log('place of birth:', placeOfBirth);
if(placeOfBirth === 'yes' || placeOfBirth === 'y'){
  alert('Sorry ' + userName+ ', I was born in Mutare, Zimbabwe, Africa.');
} else {
  alert('You are right, '+userName+', I was born in Mutare, Zimbabwe, Africa.');
}

//Question6 - requires the use of a for loop to go through 4 times
var myFavNumber = 14;
var guessedNumber = Number(prompt('Please guess a number?'));
console.log('Number user guessed:', guessedNumber);
//while(guessedNumber !== myFavNumber){
for(var i = 0; i < 3; i++){
  if(guessedNumber > myFavNumber){
    guessedNumber = Number(prompt(guessedNumber + ' is too high, try again'));
    console.log('Number user guessed high:', guessedNumber);
  } else if (guessedNumber < myFavNumber){
    guessedNumber = Number(prompt(guessedNumber + ' is too low, try again'));
    console.log('Number user guessed low:', guessedNumber);
  } else if (guessedNumber === myFavNumber){
    alert('You have guessed the right number '+guessedNumber+'. Welldone '+ userName);
    console.log('Number user guessed the correct number:', guessedNumber);
    break;
  }
}

alert('Thanks for playing the number guessing game, please continue on to the travelling game. The 14th is my birthday.');

//Question7 - array of 6 correct answers that are checked on and gives tally at the enjoyed
var placesVisited = ['iceland', 'norway', 'zimbabwe', 'England', 'canada', 'holland'];
var guessedPlacesVisited = ' ';
var tally = 0;
// var userName = 'Tony';
var chances = placesVisited.length;

console.log('length of array:',placesVisited.length);
guessedPlacesVisited = prompt('You will have ' + placesVisited.length + ' chances to guess countries I have visited, one at a time. Please make your first guess of a country I have visited?').toLowerCase();
//while(loopCounter < placesVisited.length){
for(var loopCount = 0; loopCount < placesVisited.length; loopCount++){
  //console.log('guess of place visited:',guessedPlacesVisited);
  for(var j=0; j < placesVisited.length; j++) {
    //console.log('traversing array:', placesVisited[i]);
    if(guessedPlacesVisited === placesVisited[j]) {
      alert('Welldone, ' + userName + '. Yes, I have been to ' + guessedPlacesVisited + '!!!');
      tally = tally + 1;
      console.log('tally value:',tally);
      //break;
    } else {
      console.log('traversing array elts with no match');
    }
  }
  console.log('a place visited:', placesVisited[j]);
  console.log('guessedPlacesVisited:',guessedPlacesVisited);
  while(chances > 0){
    guessedPlacesVisited = prompt('Please guess another country I have been to, you have '+ --chances + ' chances to go.').toLowerCase();
  }
}

alert(userName + ' you got ' + tally + ' out of ' + placesVisited.length + ' correct');


if (window.confirm('Thanks for taking part, hope you enjoyed engaging with me.')) {
  console.log('use of confirm');
  window.open('exit.html', ' Thanks for playing!');
}

//trying something new trying out getElementById
var greeting = 'Thank you for spending the time getting to know me ';

var welcomeMessage = greeting + name + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

console.log('Worked Well!!');
