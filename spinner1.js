const myChar = "|/-\\-";
let start =100 ;
for (const char of myChar) {
  setTimeout(() => {process.stdout.write(`\r${char}   `);}, start);
  start+=200;
};
setTimeout(() => {process.stdout.write("\n");}, start);
