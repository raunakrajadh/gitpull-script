const http = require('http');
const { exec } = require('child_process');

// Path to your project directory
const projectDir = "C:\\Users\\letbyte\\Desktop\\xybercupid";

// Function to restart the Node.js project
function pullChanges() {
    // Change to the project directory and pull the latest changes
    exec(`cd ${projectDir} && git pull`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error pulling changes: ${err}`);
            return;
        }
        console.log(`Git pull output: ${stdout}`);
        console.log(`Git pull errors: ${stderr}`);
    });
}

// Create an HTTP server to listen for webhook requests
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        console.log('Received update');
        pullChanges();
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK\n');
    } 
    else if (req.method === 'GET' && req.url === '/'){
        res.end('Hello')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});

// Listen on port 4000
server.listen(4000, () => {
    console.log('Webhook server listening on port 4000');
});
