console.log('This is a log javascript');

const panelEl = document.querySelectorAll('.panel');

// const panelElClass = document.getElementsByClassName('panel');

// for(let i=0; i<panelElClass.length; i++) {
//   console.log(panelElClass[0]);
// }

panelEl.forEach((element) => {
  // console.log(element);
  
  element.addEventListener('click', (e) => {
    // removeActive();
    let current = document.getElementsByClassName('active');
    // current[0].className = current[0].className.replace('active', '');
    current[0].classList.replace('active', 'null'); // Vcl
    e.target.classList.add('active');
  })
})

function removeActive () {
  panelEl.forEach((element) => {
    element.classList.remove('active')
  })
}

function containsActive(element) {
  // if(element.classList.contains('active')) { // ko nen gan bang true ???? 
    //   console.log('true');
    //   element.classList.remove('active')
    // } else {
    //   console.log('false');
    //   element.classList.add('active');
    // }
}

// panelElClass.forEach((element) => {
//   console.log(panelEl);
// })

 

// document.getElementBuClassName() no use forEach for element 
// https://stackoverflow.com/questions/40703465/javascript-getelementbyclass-foreach-function-not-working