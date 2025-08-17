// CRUD

const fs = require(fs)

// ReadFile
let data = fs.readFileSync('f1.txt')
console.log(data) // we get the data in budder format
console.log(data.toString()  + 'or concatinate it with a string') // we get the data in string format

// async
fs.readFile('f2.txt', function(err, data){
  if (err) {
    console.error(err);
  }
  console.log("This is file 2 Data-> " + data);
});

console.log("End");

//update

// fs.appendFile, fs.appendFileSync

// write methods

// fs.writeFile, fs.writeFileSync
fs.writeFileSync('f3.txt', 'This is file 3 data');

fs.writeFile('f4.txt', 'This is file 4 data', function(err) {
  if (err) {
    console.error(err);
  }
  console.log("This is file 4 Data-> " + data);
});


// delete methods

// fs.unlink, fs.unlinkSync
