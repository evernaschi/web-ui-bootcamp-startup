function getDayAfter() {
  let days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
  let day = document.getElementById("inpDay").value;
  let number = document.getElementById("inpNumber").value;
  number = Number(number);
  day = day.toLowerCase();
  day = day[0].toUpperCase() + day.slice(1);

  let oldIndex = days.indexOf(day)
  
  if(oldIndex === -1) {
    return alert("Invalid Day Argument\n"+"Should be a day of the week\n"+"Example: Monday");
  }

  if(isNaN(number) || number<0) {
    return alert("Invalid Number Argument\n"+"Should be a positive numeric value\n"+"Example: 4")  

  }
  
  let newIndex = (oldIndex + number) % 7

  document.getElementById("result").innerHTML = days[newIndex];

}