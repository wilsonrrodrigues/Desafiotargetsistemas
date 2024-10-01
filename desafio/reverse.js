let string = "Target Sistemas";
let reversedString = "";
let i = string.length - 1;

while (i >= 0) {
  reversedString += string[i--];
}

console.log(reversedString); 