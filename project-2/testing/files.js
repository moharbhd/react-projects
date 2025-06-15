const fs = require("fs");

//* Read files
fs.readFile('./files/docs.txt', (err , data) => {
 if (err) {
    console.log(err)
 } else {
    console.log(data.toString());
 }
});

//* Write Files
fs.writeFile("./files/docs.txt", "Hello World", () => {
console.log("DONE");
});

//* Create Folders
if (!fs.existsSync("../assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Created");
  });

  //* Remove Folders
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Removed");
  });
}

//* Remove Files
if (fs.existsSync("./files/docs.txt")) {
  fs.unlink("./files/docs.txt", (err) => {
    if (err) throw err;
    console.log("File Deleted");
  });
} else {
  console.log("No Such File");
}
