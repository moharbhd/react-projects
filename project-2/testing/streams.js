const fs = require('fs');


const readStream = fs.createReadStream('./docs/file1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/file2.txt', {encoding: 'utf8'})

// readStream.on('data',(chunk) => {
//     console.log("------------------------ New Chunk ---------------------------");
//     console.log(chunk); 

//     writeStream.write(`\nNEW CHUNCK\n`);
//     writeStream.write(chunk);
// })


//* pipe
readStream.pipe(writeStream)