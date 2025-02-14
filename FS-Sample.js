

const fs = require('fs');

/*

Create a text file with name  "fs-demo.txt" with the following content:
    
    Hi, this is a sample file in Node.js
 
*/


// Read a file using the fs module
fs.readFile("fs-demo.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:\n", data);
});

// Create a file using the fs module
fs.writeFile("fs-demo1.txt", "Hi, this is a sample file created using the fs module in Node.js", (err) => {    
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("fs-demo1.txt written successfully");
});

// Create a file content dynamically using the fs module
const contentSample = "Hi, this is a dynamically created file using the fs module in Node.js";

fs.writeFile("fs-demo2.txt", contentSample, (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("fs-demo2.txt written successfully");
});

// Rename a file using the fs module
fs.rename("fs-demo2.txt", "fs-sample.txt", (err) => {
    if (err) {
        console.error("Error renaming file:", err);
        return;
    }
    console.log("fs-demo2.txt renamed to fs-sample.txt successfully");
});

// Delete a file using the fs module
fs.unlink("fs-demo1.txt", (err) => {
    if (err) {
        console.error("Error deleting file:", err);
        return;
    }
    console.log("fs-demo.txt deleted successfully");
});
