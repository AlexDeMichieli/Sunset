
const switcher = document.getElementById('switcher');
const aniSwitcher = document.getElementById('animation-switcher');

const signal = document.getElementById('signal');
const aniSignal = document.getElementById('animation-signal');

const sun = document.getElementById('sun');
const sunShadow = document.getElementById('sun-shadow');

const invMoon = document.getElementById('inv-moon');
const moon = document.getElementById('moon');
const moonShadow = document.getElementById('moon-shadow');

const body = document.querySelectorAll('body');

const cloud3 = document.getElementById('cloud3');
const cloud4 = document.getElementById('cloud4');
const cloud5 = document.getElementById('cloud5');

const star = document.getElementById('star');
const star1 = document.getElementById('star1');





//mouseover
  switcher.addEventListener('click', () => {
  if (signal.style.display == "none") {

    signal.style.display = "block"
    switcher.style.backgroundColor ="rgba(230, 109, 61, 0.3)"

    switcher.innerHTML = "Good Night!"

    body[0].style.backgroundColor = "#ffd5be" //color of sky when day

    moon.style.top = "130%" //postion of moon when down
    moon.style.transform = "scale(0)" //size of moon when down
    moonShadow.style.top = "130%" //postion of moon-shadow when down
    moonShadow.style.transform = "scale(0)" //size of moon-shadow when down
    moon.style.transition = "1s"; //transition time when coming up
  moonShadow.style.transition = "1s"; //transition time when coming up

star.style.visibility = "hidden";
star.style.opacity = "0"
star.style.transition = "all .6s"; //time when fading out
star.style.transform = "rotate(280deg)";
star1.style.visibility = "hidden";
star1.style.opacity = "0"
star1.style.transition = "all .6s"; //time when fading out
star1.style.transform = "rotate(280deg)";

    ////

star2.style.visibility = "hidden";
star2.style.opacity = "0"
star2.style.transition = "all .6s"; //time when fading out
star2.style.transform = "rotate(280deg)";


    sun.style.top = "30%" //postion of sun when up
    sunShadow.style.top = "30%" //postion of sun-shadow when up

    sun.style.transform = "scale(2.5)"//size of sun when up
    sunShadow.style.transform = "scale(2.5)"//size of sun-shadow when up
     sun.style.transition = "1s"; //transition time when coming up
  sunShadow.style.transition = "1s"; //transition time when coming up

    cloud3.style.left = "30%" //postion of clouds when up
    cloud4.style.left = "50%"//postion of clouds when up
    cloud5.style.left = "35%"//postion of clouds when up


      } else {
  switcher.style.backgroundColor ="rgba(105, 114, 191, 0.71)"



   signal.style.display = "none"
   switcher.innerHTML = "Good Morning!"


  moon.style.top = "30%" //postion of moon when up

  moonShadow.style.top = "30%" //postion of moon-shadow when up

  moonShadow.style.transform = "scale(2)"//size of moon-shadow when coming up
  moon.style.transform = "scale(2)"//size of moon when coming up
  moon.style.transition = "2s"; //transition when coming up
  moonShadow.style.transition = "2s"; //transition when coming up



    star.style.visibility = "visible";
    star.style.opacity = "1"
    star.style.transition = "all 3s"; //time when faind in
    star.style.transitionDelay = "1s"; //delay when fading in
    star.style.transform = "rotate(1280deg)";

    star1.style.visibility = "visible";
    star1.style.opacity = "1"
    star1.style.transition = "all 3s"; //time when faind in
    star1.style.transitionDelay = "1.8s"; //delay when fading in
    star1.style.transform = "rotate(-1280deg)";

    star2.style.visibility = "visible";
    star2.style.opacity = "1"
    star2.style.transition = "all 3s"; //time when faind in
    star2.style.transitionDelay = "1.8s"; //delay when fading in
    star2.style.transform = "rotate(-1280deg)";



  sun.style.top = "150%" //postion of sun when down
  sunShadow.style.top = "150%" //postion of sun-shadow when down
  sun.style.transform = "scale(0)"//size of sun when down
  sunShadow.style.transform = "scale(0)"//size of sun-shadow when down
      sun.style.transition = "2s"; //transition time when coming up
  sunShadow.style.transition = "2s"; //transition time when coming up


  cloud3.style.left = "-200px" //postion of cloud when going away
  cloud4.style.left = "-300px" //postion of cloud when going away
  cloud5.style.left = "200%" //postion of cloud when going away

    body[0].style.backgroundColor = "#2c3e50"; //color at night


  }
    });

aniSwitcher.addEventListener('click', () => {
  if (aniSignal.style.display == "none") {

    sunShadow.style.transition = "2s"
    aniSignal.style.display = "block"
    moon.style.boxShadow = " inset -40px 30px 10px -20px rgba(0,0,0,0.48)";
    moon.style.backgroundColor = "silver"

 star.style.transform = "rotate(1280deg)";
 star.style.transitionDelay = ".1s";
 star1.style.transform = "rotate(-1280deg)";
 star1.style.transitionDelay = ".1s";

 star2.style.transform = "rotate(6040deg)";
 star2.style.transitionDelay = ".1s";

  } else {
    aniSignal.style.display = "none"
    moon.style.backgroundColor = "#2c3e50"
    moon.style.boxShadow = " inset -120px 90px 10px -20px rgba(0,0,0,0.25)";

     star.style.transform = "rotate(-1280deg)";
     star.style.transitionDelay = ".1s";
     star1.style.transform = "rotate(1280deg)";
     star1.style.transitionDelay = ".1s";

     star2.style.transform = "rotate(340deg)";
     star2.style.transitionDelay = ".1s";


    }

});

//GRADIENTS//

// xxxxx.style.backgroundImage = "radial-gradient(ellipse at center, #f9f9f9 29%,#1e5799 98%)";

// xxx.style.backgroundImage = "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))";

// var logo = document.getElementById("logo");


aniSwitcher.addEventListener("click", function(e){
  e.preventDefault;

  sunShadow.classList.remove("run-animation");

  void sunShadow.offsetWidth;

  sunShadow.classList.add("run-animation");

}, false);
