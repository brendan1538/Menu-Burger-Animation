let burger = document.getElementById('burger');
let line_1 = document.getElementById('line_1');
let line_2 = document.getElementById('line_2');
let line_3 = document.getElementById('line_3');
let lines = document.getElementsByTagName('li');

burger_collapse = true;

toggleBurger = () => {
  if (burger_collapse == true) {
    line_2.style.width = '0';
    line_2.style.visibility = 'hidden';
    line_1.style.transform = 'rotate(45deg) translateY(0.9rem)';
    line_3.style.transform = 'rotate(-45deg) translateY(-0.9rem)';
    burger_collapse = false;
  } else if (burger_collapse == false) {
    line_2.style.visibility = 'visible';
    line_2.style.width = '2.5rem';
    line_1.style.transform = 'rotate(0deg) translateY(0rem)';
    line_3.style.transform = 'rotate(0deg) translateY(0rem)';
    burger_collapse = true;
  }
};