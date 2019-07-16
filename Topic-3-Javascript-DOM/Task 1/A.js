function checkPalindrome(){
  let phrase,phrase2;

  //Normalize the input phrase
  phrase = document.getElementById("inp").value;
  phrase = phrase.normalize('NFD').replace(/[\u0300-\u036f]/g,"").replace(/[,?.!]/g,"");
  phrase = phrase.toLowerCase().split(" ").join("");

  //reverse the phrase
  phrase2 = phrase.split("").reverse().join("");

  //compare both phrases
  document.getElementById("result").innerHTML = phrase===phrase2;

}
