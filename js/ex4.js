
var a = document.createElement("a");
var newItem = document.createElement("li");


a.textContent = "College of Business";
a.setAttribute('href', "https://www.csulb.edu/college-of-business");
newItem.appendChild(a);
document.links[1].appendChild(newItem);
