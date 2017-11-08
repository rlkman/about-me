'use strict';

//Welcomes the user interactivelly
var userName = prompt('Welcome to my page, Could you please fill in your name');
  console.log('User Name supplied:', userName);
  alert('Thank you '+ userName +' take yout time to know me.' );


//The guessing game starts here

//Question1
var continentsVisited = prompt('Have I visited all 5 continents?');
  console.log('will accept yes or no answer:', continentsVisited);

  if((continentsVisited.toLowerCase() === "yes"|| continentsVisited.toUpperCase() === "YES" )||
  (continentsVisited.toLowerCase() === "y"|| continentsVisited.toUpperCase() === "Y" )){
    alert('Nope, '+ userName +' I am still to visit a couple..!!');
  } else {
    alert('Hey '+userName+' that\'s true I am still to do that.');
  }

//Question2
  var favouriteMovie = prompt('Do I have a favourite movie?');
    console.log('will accept yes or no answer:', favouriteMovie);

    if((favouriteMovie.toLowerCase() === "no"|| favouriteMovie.toUpperCase() === "NO" )||
    (continentsVisited.toLowerCase() === "n"|| continentsVisited.toUpperCase() === "N" )){
      alert(userName + ' You are right, I dont like movies that much!!');
    } else {
      alert('That\'s unfortunately not true, '+ userName);
    }

//Question3
    var petsOwned = prompt('Do I own any pets?');
      console.log('will accept yes or no answer:', petsOwned);

      if((petsOwned.toLowerCase() === "yes"|| petsOwned.toUpperCase() === "YES" )||
      (petsOwned.toLowerCase() === "y"|| petsOwned.toUpperCase() === "Y" )){
        alert('Nope, Unfotunately I love travelling too much to give enough attention to a pet');
      } else {
        alert('That\'s true I do not own a pet - I spend too much time on planes.');
      }

//Question4
      var teamSupported = prompt('Do I support Liverpool Football Club?');
        console.log('will accept yes or no answer:'+teamSupported);

        if((continentsVisited.toLowerCase() === "yes"|| continentsVisited.toUpperCase() === "YES" )||
        (continentsVisited.toLowerCase() === "y"|| continentsVisited.toUpperCase() === "Y" )){
          alert('Definitely, '+ userName +' support the team...YNWA...!!!');
        } else {
          alert('Are they any other teams...'+ userName + '???...YNWA.');
        }

  //Question4
      var travelQuestion = prompt('Do I like travelling?');
        console.log('will accept yes or no answer:', travelQuestion);

        if((travelQuestion.toLowerCase() === "yes"|| travelQuestion.toUpperCase() === "YES" )||
        (travelQuestion.toLowerCase() === "y"|| travelQuestion.toUpperCase() === "Y" )){
          alert('Definitely, '+ userName +' you bet...!!!');
        } else {
          alert('There\'s so much of the world to see.'+ userName + ' try visiting a new palce every year.');
        }


if (window.confirm("Hope you enjoyed answering these questions.")) {
  console.log('use of confirm')
  window.open("exit.html", "Thanks for playing!");
}

var greeting = 'Thank you for spending the time getting to know me ';
var name = userName;

var welcomeMessage = greeting + name + '!';

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;

console.log('combined output');
