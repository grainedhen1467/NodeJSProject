//This is part of the index4.js file from the tutorialFiles folder. It uses the logEvents function from the logEvents.js file to log events to the console and to a file. The logEvents function logs the message to the console and writes it to a file. The logEvents function uses the format function from the date-fns library to format the current date and time. It also uses the uuidv4 function from the uuid library to generate a unique identifier for each log entry. The logEvents function appends the log entry to the eventLog.txt file in the logs folder. If the logs folder does not exist, the function creates it using the mkdir function from the fsPromises module. If an error occurs during the logging process, the function logs the error to the console.

const { format } = require("date-fns");
const { v4: uuidv4 } = require("uuid");

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async message => {
    const dateTime = `${format(new Date(), "yyyyMMd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
        }
        await fsPromises.appendFile(path.join(__dirname, "..", "logs", "eventLog.txt"), logItem);
    } catch (err) {
        console.error(err);
    }
};

module.exports = logEvents;