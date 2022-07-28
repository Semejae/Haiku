"use strict";

export default class ThreeLine {
  constructor(text) {
    this.text = text;
    this.count = 0;
    this.syllables = 0;
  }

  howManyLines(text){
    let count = 0;
    let newArray = text.split("");
    for (let i = 0; i <= newArray.length; i++) {
      if (newArray[i] == "." ) {
        count += 1;
        
      } else if(count > 3) {
        return "doesn't have three lines."
      } else{
      }
  }
  return count;
  }
  
  checkSyllables(text) {
    let newArray = text.split(".");
  newArray.forEach(function(element) {
    let newElement = element.split(" ");
    console.log(newElement);
  
  })
  return newArray.length;
  };
}
// var count = function(word) 
// {

//     word = word.toLowerCase();                                     
//     word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');   
//     word = word.replace(/^y/, '');                                 
//     //return word.match(/[aeiouy]{1,2}/g).length;   
//     var syl = word.match(/[aeiouy]{1,2}/g);
//     console.log(syl);
//     if(syl)
//     {
//         //console.log(syl);
//         return syl.length;
//     }
// } 

