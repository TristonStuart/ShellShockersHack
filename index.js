// Get http, fs, and path
const http = require('http');
const fs = require('fs');
const path = require('path');

// Log
console.log("Server Running (Hopefully)")

// Start a server at port 8000
http.createServer((request, response) => {
    console.log(request.url);

    // Check if this is a mod.js request
    if (request.url == "/shellshock.min.js"){
        // Set Content Type
        let contentType = "text/javascript";
        // Define file path (You can change if you place file in another location)
        let filePath = "." + request.url;
        // Read file
        fs.readFile(filePath, (error, content) => {
            if (error){
                if (error.code == 'ENOENT'){
                    console.error("Mod.js file is not found!");
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end('', 'utf-8');
                }else {
                    console.error("No Idea : " + error.code);
                    response.writeHead(200, {'Content-Type': contentType});
                    response.end('', 'utf-8');
                }
            }else {
                response.setHeader('Access-Control-Allow-Origin', '*');
                response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
                response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                response.setHeader('Access-Control-Allow-Credentials', true);
                response.writeHead(200, {'Content-Type': contentType});
                response.end(content, 'utf-8');
            }
        });
    }else {
        response.writeHead(200, {'Content-type':'text/plan'});
        response.write('Invalid URL Try : http://localhost:8000/mod.js');
        response.end();
    }
}).listen(8000);
