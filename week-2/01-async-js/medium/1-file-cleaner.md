## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


### Code for above problem ..

const fs = require("fs");

function readFile() {
  return new Promise((res, rej) => {
    fs.readFile("a.txt", "utf-8", (err, data) => {
      res(data);
    });
  });
}

function writeFile(data) {
  return new Promise((res, rej) => {
    fs.writeFile("a.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully");
      }
    });
  });
}

async function main() {
  const data = await readFile();
  writeFile(data.trim().replace(/\s+/g, " "));
}

main();
