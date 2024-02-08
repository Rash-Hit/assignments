## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


### Code for Above Problem


const fs = require("fs");

function readFile() {
  return new Promise((res, rej) => {
    fs.writeFile(
      "a.txt",
      "Hi there this is the updated text from index.js to a.txt",
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("File updated..");
        }
      },
    );
  });
}

async function main() {
  await readFile();
}

main();

