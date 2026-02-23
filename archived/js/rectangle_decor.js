
// window.addEventListener('resize', function() {
//     console.log('changing height');

//     // Get the rectangle element
//     var rectangle = document.getElementById('project-decor'); 

//     // Get the y position of the bottom-most card
//     var cardElement = document.getElementById('last-card'); 
//     var cardRect = cardElement.getBoundingClientRect();
//     var cardBottom = cardRect.bottom;

//     var subtractedVH = window.innerHeight / 2;

//     rectangle.style.height = (cardBottom * 2) + "px";

//     // Adjust height based on the bottom-most card
//     // rectangle.style.height = scrollY;
//     // console.log('rectangle height:' + rectangle.style.height);
//   });