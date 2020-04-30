
 var script = document.createElement('script');
  script.src = 'http://127.0.0.1:8000/shellshock.min.js';
  script.onload = function() {
    console.log('your script have been loaded');
  }
  document.body.appendChild(script);
