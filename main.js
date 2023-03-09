//Menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
}

//Cart Toggle
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}
//Login Form Toggle
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove ('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}
//On Click On Menu Links Removed Menu
window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('move');
}
//Change Header Backgrond  Color And Shadow On Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0)
});

//Scroll Top 
let scrolltop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () =>{
    scrolltop.classList.toggle('active', window.scrollY > 0)
});


const productList = document.getElementById("popular");
const productItems = productList.getElementsByTagName("button");
const button = document.getElementById("popular");

const itemsToShow = 5;
let currentCount = itemsToShow;

for (let i = currentCount; i < productItems.length; i++) {
  productItems[i].style.display = "none";
}

button.addEventListener("click", function() {
  if (currentCount < productItems.length) {
    for (let i = currentCount; i < currentCount + itemsToShow; i++) {
      if (productItems[i]) {
        productItems[i].style.display = "block";
      }
    }
    currentCount += itemsToShow;
  }

  if (currentCount >= productItems.length) {
    button.style.display = "none";
  }
});











function add(a, b) {
    return a + b;
  }
  
  const result = add(2, 3);
  console.log(result); // Output: 5

  const myArray = [1, 2, 3];

// This creates a new array with the new element added, and does not modify the original array
const newArray = [...myArray, 4];

console.log(myArray); // Output: [1, 2, 3]
console.log(newArray); // Output: [1, 2, 3, 4]
function multiplyBy(factor) {
    return function (number) {
      return number * factor;
    };
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  console.log(double(4)); // Output: 8
  console.log(triple(4)); // Output: 12
  const addAndMultiplyByTwo = (a,b) => multiplyBy(2)(add(a,b));

  console.log(addAndMultiplyByTwo(2,3));