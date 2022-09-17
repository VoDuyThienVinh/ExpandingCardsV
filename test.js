'use strict';
console.log('This is a test js');
console.log('getElementsByClassName return HTML Collection');
console.log('querySelectorAll return NodeList');

const panelHTMLCollection = document.getElementsByClassName('panel'); // Return HTML Collection not use forEach
const panelNodeList = document.querySelectorAll('.panel'); // Return NodeList use forEach

let length = panelHTMLCollection.length;

// Solution 1: We will save the previous element and when we click on another, we will delete the previous one and add the next one
// Write code for V use className (HTML Collection)
function testForHTMLCollection() {
  for(let i=0; i < length; i++){
   panelHTMLCollection[i].addEventListener('click', (e) => {
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace('active', ''); // ClassName return value 
      e.target.classList.add('active'); 
    })
  }
}

function testForHTMLCollection1() {
  for(let i=0; i < length; i++) {
    panelHTMLCollection[i].addEventListener('click', (e) => {
      let tar = e.target;
      let current = document.querySelector('.active'); // Use querySelector
      current.classList.replace('active', 'null');
      tar.classList.add('active');
    })
  }
}

// Write code fot V use DOMTokenList (Node List)
function testForNodeList() {
  panelNodeList.forEach((element) => {
    element.addEventListener('click',(e) => {
      let current = document.getElementsByClassName('active'); // Use by className
      current[0].classList.replace('active', 'null');
      e.target.classList.add('active'); 
    })
  }) 
}

function testForNodeList1() {
  panelNodeList.forEach((element) => {
    element.addEventListener('click', (e) => {
      let tar = e.target;
      let current = document.querySelector('.active');
      current.classList.replace('active', null);
      tar.classList.add('active');
    })
  })
}

// Write code for W3SCHOOL
function w3school() {
  for(let i=0; i < panelHTMLCollection.length; i++){
    panelHTMLCollection[i].addEventListener('click', () => {
      let current = document.getElementsByClassName('active');
      current[0].className = current[0].className.replace('active', '');
      this.className += ' active'; // Must white-space
      console.log(this);
    })
  }
}

// Solution 2: I will check them all and delete that class every time I choose another one
function testSolution2() {
  panelNodeList.forEach((element) => {
    element.addEventListener('click', (e) => {
      removeActive();
      e.target.classList.add('active');
    })
  })
}

function removeActive() {
  panelNodeList.forEach((e) => {
    e.classList.remove('active')
  })
}
testSolution2();
