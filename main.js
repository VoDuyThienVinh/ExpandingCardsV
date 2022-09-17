'use strict';

const panelEl = document.querySelectorAll('.panel');

panelEl.forEach((element) => {
  element.addEventListener('click', (e) => {
    let current = document.getElementsByClassName('active');
    current[0].classList.replace('active', 'null'); 
    e.target.classList.add('active');
  })
})
