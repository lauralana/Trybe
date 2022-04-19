let botao = document.getElementById('start-race-btn');
let car1 = document.querySelector('.car1');
let car2 = document.querySelector('.car2');
let car3 = document.querySelector('.car3');
let car4 = document.querySelector('.car4');
let car5 = document.querySelector('.car5');

car1.style.marginLeft = 0;
car2.style.marginLeft = 0;
car3.style.marginLeft = 0;
car4.style.marginLeft = 0;
car5.style.marginLeft = 0;
botao.addEventListener('click', function (event) {
  car1.style.marginLeft = Math.floor(parseInt(car1.style.marginLeft) + Math.random() * 100) + 'px';
  car2.style.marginLeft = Math.floor(parseInt(car2.style.marginLeft) + Math.random() * 100) + 'px';
  car3.style.marginLeft = Math.floor(parseInt(car3.style.marginLeft) + Math.random() * 100) + 'px';
  car4.style.marginLeft = Math.floor(parseInt(car4.style.marginLeft) + Math.random() * 100) + 'px';
  car5.style.marginLeft = Math.floor(parseInt(car5.style.marginLeft) + Math.random() * 100) + 'px';

  if (parseInt(car1.style.marginLeft) + 200 > window.innerWidth) {
    alert('The WINNER is Lazy Luke and Blubber Bear!!!')
    botao.disabled = true;
  }
  if (parseInt(car2.style.marginLeft) + 200 > window.innerWidth) {
    alert('The WINNIER is Dick Dastardly !!!!')
    botao.disabled = true;
  }
  if (parseInt(car3.style.marginLeft) + 200 > window.innerWidth) {
    alert('The WINNER is Professor Pat Pending!!!!')
    botao.disabled = true;
  }
  if (parseInt(car4.style.marginLeft) + 200 > window.innerWidth) {
    alert('The WINNER is The Ant Hill Mob!!!!')
    botao.disabled = true;
  }
  if (parseInt(car5.style.marginLeft) + 200 > window.innerWidth) {
    alert('The WINNER is Penelope Pitstop!!!!')
    botao.disabled = true;
  }
});