//Select the section with an id of container without using querySelector.
document.getElementById('container');

//Select the section with an id of container using querySelector.
document.querySelector('#container');

//Select all of the list items with a class of "second".
document.querySelectorAll('.second');


//Select a list item with a class of third, but only the list item inside of the ol tag.
var selectFromArray = document.getElementsByClassName('third');
selectFromArray[1];


//Give the section with an id of container the text "Hello!".
var hello = document.createElement('p');
hello.innerText = "Hello";
container.appendChild(hello);


//Add the class main to the div with a class of footer.
var addMain = document.querySelector('.footer');
addMain.classList.add('main');
or
document.querySelector('.footer').className + 'main';


//Remove the class main on the div with a class of footer.
var removeMain = document.querySelector('.footer');
removeMain.classList.remove('main');

//Create a new li element.
var newli = document.createElement('li')


//Give the li the text "four".
newli.innerText = 'four';


//Append the li to the ul element.
var ulist = document.querySelector('ul');
ulist.appendChild(newlist);


//Loop over all of the list inside the ol tag and give them a background color of "green".
var olist = document.querySelectorAll('ol li');
for (var i = 0; i <= olist.length; i++) {
    olist[i].style.background = 'green';
}


//Remove the div with a class of footer.
document.querySelector('.footer').remove('div')