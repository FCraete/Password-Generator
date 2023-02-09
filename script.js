const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordLength = 15; // sets the password length
let passwordGenerator = document.getElementById("bttn"); // gets the generate password button
let passwordField = document.getElementById("input-password"); // gets the input field where the password will be generated
let copyButton = document.getElementById("copy-bttn"); // gets the copy to clipboard button

function generateRandomLetter() {
  let arrIndex = Math.floor(Math.random() * characters.length);
  return characters[arrIndex];
}

passwordGenerator.addEventListener("click", function () {
  let passwordString = "";
  for (let i = 0; i < passwordLength; i++) {
    passwordString += generateRandomLetter();
  }
  passwordField.innerText = passwordString;
});

copyButton.addEventListener("click", function () {
  var r = document.createRange();
  r.selectNode(document.getElementById("input-password"));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Copied " + r + " to clipboard");
});
