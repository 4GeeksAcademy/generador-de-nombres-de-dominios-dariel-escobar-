import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];


for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++) {
        console.log(pronouns[i] + adjectives[j] + nouns[k] + extensions[l]);
      }
    }
  }
}


for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      let word = pronouns[i] + adjectives[j] + nouns[k];

      
      if (word.endsWith("es")) {
        console.log(word.slice(0, -2) + ".es");
      }
    }
  }
}
  console.log("Hello Rigo from the console!");
};
