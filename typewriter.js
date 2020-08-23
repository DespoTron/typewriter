const sentence = "hello there from lighthouse labs";

let delay = 0; //1, 2
let results = ""

for(const char of sentence) {
  setTimeout(() => {
    results = process.stdout.write(char);
    delay += 50;
  }, delay)
};

setTimeout(() => {
  console.log("\n")
}, 0)
