let [myChar , start] = ["|/-\\-" , 100];
[...myChar].forEach(function(x){
  setTimeout(function(){process.stdout.write((`\r${x}   `));},start );
  start+=200;
});
setTimeout(() => {process.stdout.write("\n");}, start);