//------Reading and Writing Files with NodeJS------//

// const fs = require("fs");
// const path = require("path");

//This is used to read and write files asynchronously. This is part of the second part of this file
// const fsPromises = require("fs").promises;


// This is a code block to read a file and log its contents to the console.
// fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

// This is a code block to write to a file and to log a confirmation message to the console.
// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Hello, World!", (err) => {
//     if (err) throw err;
//     console.log("File written to...");

// This is a code block to append to a file and to log a confirmation message to the console.
// If the file does not exist, it will be created. This code block is also an example of chaining
// asynchronous functions together to prevent race conditions.
//     fs.appendFile(path.join(__dirname, "files", "reply.txt"), " Banana pudding pie.", (err) => {
//         if (err) throw err;
//         console.log("File written to...");

//         fs.readFile(path.join(__dirname, "files", "reply.txt"), 'utf8', (err, data) => {
//             if (err) throw err;
//             console.log("Contents of 'reply.txt':");
//             console.log(data);

//             fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newreply.txt"), (err) => {
//                 if (err) throw err;
//                 console.log("File renamed...");

//                 // fs.unlink(path.join(__dirname, "files", "newreply.txt"), (err) => {
//                 //     if (err) throw err;
//                 //     console.log("File deleted...");
//                 // });
//             });
//         });
//     });
// });


//This is a code block that will catch uncaught errors and log them to the console.
// process.on("uncaughtException", (err) => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// });






/*------This is a separate part of index2.js dealing with promises------*/

// const path = require("path");

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
//         console.log(data);
//         await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"), data);
//         await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
//         await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), " How you doin'");
//         await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseRenamed.txt")); 
//         const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseRenamed.txt"), "utf8");
//         console.log(newData);
//     } catch (err) {
//         console.error(err);
//     }
// };

// fileOps();






//------This is a separate part of index2.js dealing with streaming------//

// This is using streaming to read and write files. This is part of the third part of this file
// Streaming is useful for larger files because it reads and writes in chunks, rather than all at once.
// const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });
// const ws = fs.createWriteStream("./files/loremCopy.txt");

// This is the version using a listener

// rs.on("data", (chunk) => {
//     ws.write(chunk);
// });

//This is the version using the pipe method, which is more concise
// rs.pipe(ws);






//------This is a separate part of index2.js dealing with adding and removing directories------//
// Also checks for existing directories
// if (!fs.existsSync("./new")) {
//     fs.mkdir("./new", (err) => {
//         if (err) throw err;
//         console.error("Directory created successfully!");
//     });
// }

// if (fs.existsSync("./new")) {
//     fs.rmdir("./new", (err) => {
//         if (err) throw err;
//         console.error("Directory removed successfully!");
//     });
// }