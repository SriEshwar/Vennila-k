const filesystem = require('fs');
 filesystem.writeFile("hello.txt","hiiiiiiiii");
console.log(filesystem.readFileSync('hello.txt').toString());

try {
    const data = filesystem.readFileSync('hello2.txt');
    console.log(data.toString());
  } catch (err) {
    console.error("File not found");
  }