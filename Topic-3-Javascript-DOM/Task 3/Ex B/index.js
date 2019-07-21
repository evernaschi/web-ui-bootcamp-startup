/*
  Take an url, make a request with JavaScript as parameter and print the result
   in the HTML document
*/

async function getResponseFetch(url) {
  let req = await fetch(url);
  let ansObj = await req.json();
  list = [];
  ansObj.items.forEach(x=>(list.push(x.full_name)));
  document.getElementById("result").innerHTML = (makeList(list)).outerHTML;
  console.log("new response");
}

/*
  Take an url, make a request with input parameter and print the result
   in the HTML document
*/

async function search(url) {
  let param = document.getElementById("inp").value;
  param = '?q=' + param
  let req = await fetch(url+param);
  let ansObj = await req.json();
  list = [];
  ansObj.items.forEach(x=>(list.push(x.full_name)));
  document.getElementById("result").innerHTML = (makeList(list)).outerHTML;
}

/*
  Take an array and return a HTML List
*/

function makeList(array) {
  var list = document.createElement('ul');
  var p = document.createElement('p');
  p.appendChild(document.createTextNode("Results:"))
  list.appendChild(p);
  
  for (var i = 0; i < array.length; i++) {
    var item = document.createElement('li');

    item.appendChild(document.createTextNode(array[i]));

    list.appendChild(item);
  }
  
  return list;    
}