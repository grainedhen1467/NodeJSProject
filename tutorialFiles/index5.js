//Ways to serve files in NodeJS

const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    let filepath;

    // this is a simple way to serve files
    // if (req.url === "/" || req.url === "index.html") {
    //     res.statusCode = 200;
    //     res.setHeader("Content-Type", "text/html");
    //     filepath = path.join(__dirname, "..", "views", "index.html");
    //     fs.readFile(filepath, "utf8", (err, data) => {
    //         res.end(data);
    //     });
    // }

    // switch (req.url) {
    //     case "/":
    //     // case "/index.html":
    //         filepath = path.join(__dirname, "..","views", "index.html");
    //         res.statusCode = 200;
    //         res.setHeader("Content-Type", "text/html");
    //         fs.readFile(filepath, "utf8", (err, data) => {
    //             res.end(data);
    //         });
    //         break;
    // }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
