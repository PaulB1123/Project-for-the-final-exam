// var slide = function(ele,options) {
//     var $ele = $(ele);
//     var setting = {
//         speed: 3000,
//         interval: 3000,
        
//     };

//     var $lis = $ele.find('li');
//     var timer = null;

// $ele.find('.hi-next').on('click', function() {
//     next();
// });
// $ele.find('.hi-prev').on('click', function() {
//     states.push(states.shift());
//     move();
// });
// $ele.on('mouseenter', function() {
//     clearInterval(timer);
//     timer = null;
// })

// }

// move();



// function move() {
//     $lis.each(function(index, element) {
//         var state = states[index];
//         $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img');
//     });
// }


// function next() {
//     states.unshift(states.pop());
//     move();
// }

// // $.fn.hiSlide = function(options) {
// //     $(this).each(function(index, ele) {
// //         slide(ele,options);
// //     });

// //     return this;
// }(jQuery);


var logo_to_use = document.querySelector("#logo_to_use");
var li_v1 = document.querySelector("#li_v1");
var li_v2 = document.querySelector("#li_v2");


const mediaQuery2 = window.matchMedia("(min-width: 700px)");
if (mediaQuery2.matches) {
  console.log("query2");
  logo_to_use.classList.add("big_logo");
  li_v1.classList.remove("hidden");
  li_v2.classList.remove("hidden");



//   document.querySelector(".asidecontainer").addEventListener("click", addWidth);
//   document.querySelector(".secondhalf").addEventListener("click", addWidth);
}

const mediaQuery = window.matchMedia("(max-width: 700px)");
if (mediaQuery.matches) {
    console.log("query1");
  logo_to_use.classList.add("small_logo");
//   document
//     .querySelector(".burgericon")
//     .addEventListener("click", changeDisplay);
}

// function changeDisplay() {
//   document.querySelector(".logo-image").classList.toggle("changeOpacity");
//   document.querySelector(".icons").classList.toggle("changeOpacity");
// }


















// $ele.find('.hi-next').on('click', function() {
//     next();
// });
// $ele.find('.hi-prev').on('click', function() {
//     states.push(states.shift());
//     move();
// });





// const hi_next = document.querySelector(".nav-toggle");
// const hi_prev = document.querySelector(".links");
