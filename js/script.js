const humburger = document.querySelector('.menu');
const mobileNavbar = document.querySelector('.navlinks');
const menuBar = document.querySelector('.menuBar');

const mobileNav = () => {
   humburger.classList.toggle('fa-xmark');
   mobileNavbar.classList.toggle('hidden');
   mobileNavbar.classList.toggle('flex');
   menuBar.classList.toggle('text-white');
}
humburger.addEventListener('click' , mobileNav);

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();