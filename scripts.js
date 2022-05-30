window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//menú lateral
function openNav() {
  document.getElementById("menuServicio").style.width = "30%";
}

function closeNav() {
  document.getElementById("menuServicio").style.width = "0%";
}


window.addEventListener('load', function(){
  new Glider(document.querySelector(".carousel-lista"),{
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      dots: ".puntos",
      rewind: true,
      arrows: {
        prev: '.carousel-anterior',
        next: '.carousel-siguiente'
      },
      responsive: [
        {
         
          breakpoint: 480,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2
          }
        },{
         
          breakpoint: 769,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 3
          }
        }
      ]
    });
  });


function toggle() {
  var x = document.getElementById("dropdown-mapa");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
