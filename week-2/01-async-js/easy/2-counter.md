## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


### Code for above problem 

function counter(startPoint) {
  setTimeout(() => {
    console.log(startPoint);
    counter(startPoint + 1);
  }, 1000);
}

counter(0);




































































(Hint: setTimeout)