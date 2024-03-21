

//const myInfo = document.getElementById("demo").innerHTML =  window.location.href;
// Create new div

console.log(window.document.title); // Get the title of the document
//var element = window.document.getElementById('myElement'); // Get an element by its ID
//element.innerHTML = 'New content'; // Modify the content of the element

const newDiv = document.createElement('div');
newDiv.className = "fruitdiv";
// Create new element
const newParagraph = document.createElement('h2');
newParagraph.className = "newparadiv1";

// Add text content to new element
newParagraph.textContent = 'fruits:';
newParagraph.style.textDecoration = "underline";

// Select parent element
const parentDiv = document.querySelector('div');

// Append new element to parent element
parentDiv.after(newParagraph);

//Create fruits odrerlist 
var fruits = ['Mango', 'Banana', 'Orange','Kiwi'];
//First I create a ul element
var fruitul = document.createElement('ul');
fruitul.className = "fruitsul";
fruitul.style.backgroundColor = "Blue";
parentDiv.appendChild(fruitul);
//parentDiv.appendChild(fruitul);
console.log(fruitul.className);
//Then I append it at the body
document.getElementsByTagName('body')[0].appendChild(fruitul);
//Via for loop for every value in the arr
//I create a li element I set the array value as innerHTML
//and at final I append it at the ul
for (var i = 0; i < fruits.length; i++) {
  var fruitli = document.createElement('li');
  fruitli.className = "fruitli"
  fruitli.innerHTML = fruits[i];
  fruitul.appendChild(fruitli);
}
console.log(fruitli.className);

//const parentDiv = document.querySelector('div');
const fruitdiv = document.querySelector('.fruitsul');
//const newDivflower = document.createElement('div');
//newDivflower.className = "flowerdiv";

const newParagraph2 = document.createElement('h2');
newParagraph2.className = "newparadiv2";

// Add text content to new element
newParagraph2.textContent = 'flowers:';
newParagraph2.style.textDecoration = "underline";
fruitdiv.after(newParagraph2);

//var referenceNode = document.querySelector(fruitul);
//Create flower list
var flowers = ['Rose', 'Lilly', 'Marigold'];

//First I create a ul element
var flowerul = document.createElement('ul');
flowerul.className = "flowerul";
flowerul.style.backgroundColor = "Yellow";
console.log(flowerul.className);
//Then I append it at the body
document.getElementsByTagName('body')[0].appendChild(flowerul);

//Iterate over a collection of elements to accomplish some task.
for (var i = 0; i < flowers.length; i++) {
  var flowerli = document.createElement('li');
  flowerli.className = "flowerli"
  flowerli.innerHTML = flowers[i];
  flowerul.appendChild(flowerli);
}
console.log(flowerli.className);

// Query selector all + Iterate over a collection of elements to accomplish some task.//
var divs = document.querySelectorAll('.fruitli').forEach(function (el) {
  el.style.color = "orange";
})

var divs = document.querySelectorAll('.flowerli').forEach(function (el) {
  el.style.color = "Green";
})

//Use the parent-child-sibling relationship to navigate between elements at 
//least once (firstChild, lastChild, parentNode, nextElementSibling,
// etc.).
console.log(fruitul.firstChild.innerHTML);
console.log(fruitul.lastChild.innerHTML);
console.log(fruitul.nextElementSibling.firstChild.textContent);
console.log(fruitul.nextElementSibling.lastChild.textContent);
console.log(flowerul.parentNode.textContent)
//update fruit last name to Blue berry
fruitul.firstChild.innerHTML = "Blue Beery"

// windows click - Browser Object Model (BOM) properties or methods.
window.addEventListener("click", function (event) {
  var x1 = event.clientX;
  var y1 = event.clientY;
  console.log('Clicked at coordinates: (x=' + x1 + ', y=' + y1 + ')');

  //this.alert("Clicked at coordinates:", event.clientX, event.clientY);
});
console.log(window.location.href);

//Include at least one form and/or input with HTML attribute validation.
const flowerdiv = document.querySelector('.flowerul');

let section1 = document.createElement('A');
section1.id = "target1";
let section2 = document.createElement('sec');
section2.id = "target2";
flowerdiv.after(section1);
//document.write("<br>");
flowerdiv.after(section2);

let t1, t2, t3, div1, div2, cln
t1 = document.getElementById('target1');
t2 = document.getElementById('target2');
div1 = document.querySelector('.adv');
t1.appendChild(div1.cloneNode(true));

t3 = document.querySelector('[type="text/html"]');
cln = t3.cloneNode(true);
div2 = cln.textContent;
t2.innerHTML = div2;


let form = document.createElement('form');
form.id = "form";
flowerdiv.after(form);

const errorfield = document.createElement('div')
errorfield.id = "error"
errorfield.className = "error"
form.appendChild(errorfield);
//login details
const login = document.createElement('h2');
login.className = "Login";
login.textContent = 'Login:';
login.style.textDecoration = "underline";
form.appendChild(login);

var lableusername = document.createElement("LABEL");
lableusername.className = "lableusername";
lableusername.textContent = "User Name : ";
document.querySelector('.Login').after(lableusername);

var x = document.createElement("INPUT");
x.className = "userName"
x.id = "userName"
x.autocomplete = "on"
x.Placeholder = "user Name";
x.setAttribute("type", "text");
document.querySelector('.lableusername').after(x);

var br = document.createElement("br");
document.querySelector('.userName').after(br);

var lablepassword = document.createElement("LABEL");
lablepassword.className = "lablepassword";
lablepassword.textContent = "Password : ";
document.querySelector('.userName').after(lablepassword);

var y = document.createElement("INPUT");
y.className = "password";
y.id = "password";
y.autocomplete = "on"
y.Placeholder = "password";
y.setAttribute("type", "password");
document.querySelector('.lablepassword').after(y);

const newButton = document.createElement('button');
newButton.id="submit";
newButton.textContent = "submit";
newButton.setAttribute("type", "submit");
document.querySelector('.password').after(newButton);

const element = document.getElementById("newButton");
//element.addEventListener("click", function () {
//  console.log("button Click");
//  alert("button Click");
//});

const namef = document.getElementById('userName');
console.log(namef.value);
const passf = document.getElementById('password');
console.log(passf.value);
const nbtn = document.querySelector('button');
const errorelement = document.querySelector('.error');
errorelement.style.backgroundColor = "red";


nbtn.addEventListener("click", (el) => {
  let messages = [];
  /*if (errorelement) {
  //  errorelement.innerHTML = "New content";
    } else {
    console.error("Element not found in the DOM.");
    } */
  if (namef.value === '' || namef === null) {
    messages.push('User name is required');
    console.log("Name can't be blank");
  } else if (passf.value.length < 8) { messages.push('Password should be 8 chararator'); }
  else if (namef.value === 'jaya' && passf.value === 'password') {
    errorelement.style.backgroundColor = "Green"
    messages.push('User is validated');
  } else { messages.push('user is not validated') }

  if (messages.length > 0) {
    el.preventDefault()
    //console.log(messages[0]);
    errorelement.innerText = messages.join(', ')
    //alert(messages)

  }
  el.preventDefault();

})

// // Event listener for a button click
// document.getElementById('submit').addEventListener('click', buttonClickHandler);

// // Event listener for a key press
// document.addEventListener('keypress', keyPressHandler);

// // Event handler function for button click
// function buttonClickHandler(event) {
//     console.log('Button clicked!');
//     // You can access event properties or perform other actions here
// }

// // Event handler function for key press
// function keyPressHandler(event) {
//     console.log('Key pressed: ' + event.key);
//     // You can access event properties or perform other actions here
// }
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.fruitli').forEach(function (el) {
    const button = document.createElement('button');
    button.textContent = 'BUY';
    button.className = 'buyButton';
    
    // Create an input field
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'quantityInput';
    input.placeholder = 'Enter quantity';

    // Append the button and input to the fruit list item
    el.appendChild(button);
    el.appendChild(input);

    // Add event listener to the button
    button.addEventListener('click', function () {
      const quantity = parseInt(input.value) || 0; // Get the quantity entered in the input field
      alert("You bought " + quantity + " " + el.textContent.trim());
    });
  });

  // Add clickable button and input to each flower list item
  document.querySelectorAll('.flowerli').forEach(function (el) {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'BUY';
    button.className = 'buyButton';
    
    // Create an input field
    const input = document.createElement('input');
    input.type = 'number';
    input.className = 'quantityInput';
    input.placeholder = 'Enter quantity';

    // Append the button and input to the flower list item
    el.appendChild(button);
    el.appendChild(input);

    // Add event listener to the button
    button.addEventListener('click', function () {
      const quantity = parseInt(input.value) || 0; // Get the quantity entered in the input field
      alert("You bought " + quantity + " " + el.textContent.trim());
    });
  });

});
