const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3500;

// Map of file extensions to MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} request for ${req.url}`);

    // Normalize the requested URL and construct the file path
    let filePath = path.join(__dirname, "views", req.url === "/" ? "index.html" : req.url);

    // Determine the MIME type based on the file extension
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read and serve the file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {
                // File not found
                res.statusCode = 404;
                res.setHeader("Content-Type", "text/plain");
                res.end("Not Found");
            } else {
                // Other server error
                console.error("Error reading the file:", err);
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Internal Server Error");
            }
        } else {
            // Success: Serve the file with the appropriate MIME type
            res.statusCode = 200;
            res.setHeader("Content-Type", contentType);
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
