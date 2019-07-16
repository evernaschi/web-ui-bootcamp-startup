/*
  Take an url from an HTML Input, make a request using XMLHttpRequest 
  and print the result in the HTML document
*/

function getResponse(){
  var req = new XMLHttpRequest();
  let ans;
  req.open('GET','http://api.icndb.com/jokes/random',true);
  req.responseType='json';
  req.send();
  req.onreadystatechange = function(){
    ansObj = req.response;
    if (ansObj !== null){
      let joke = ansObj.value.joke;
      document.getElementById("result").textContent = joke;
    }
  }
}

oldJokes = []

/*
  Take an url from an HTML Input, make a request using Fetch 
   and print the result in the HTML document.
  Also checks for server errors and duplicated jokes.

*/

async function getResponseFetch(url){
  let req = await fetch(url);
  if(req.status === 500){
    // server error
    document.getElementsByTagName("section")[0].style.background = "red";
  }
  console.log("jokes: "+oldJokes);
  let ansObj = await req.json();
  let jokeID = ansObj.value.id;
  if (oldJokes.includes(jokeID)){
    // check duplicated jokes
    document.getElementById("result").textContent = "Duplicated Joke ID: "+jokeID;    
    return;
  }
  oldJokes.push(jokeID);
  let joke = ansObj.value.joke;
  document.getElementById("result").textContent = joke;
}
