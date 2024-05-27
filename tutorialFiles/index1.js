//------Introduction to Node.js------//

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide,  } = require("./math");

// This will display the global object of node.js
// console.log(global);

//These are actually pretty useful
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

//This will take you to the current directory (absolute path)
// console.log(__dirname)

//This will take you to the current file (absolute path)
// console.log(__filename)

//This will take you to the current directory, same as __dirname (absolute path)
// console.log(path.dirname(__filename))

//This will display the current file name (name only not path)
// console.log(path.basename(__filename))

//This will display the file extension (extension only not path)
// console.log(path.extname(__filename))

// This will give you an object with the file name, extension, and directory. The properties are root, dir, base, ext, and name.
// console.log(path.parse(__filename))

// console.log(add(1000, 2));
// console.log(subtract(1000, 2));
// console.log(multiply(1000, 2));
// console.log(divide(1000, 2));