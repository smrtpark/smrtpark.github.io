
//This code displays the logo along with the menu bar items in the top navigation bar

var optionsDiv = document.getElementById("options");
var a = 0;
var a1 = 0;

var options = ["OUR TEAM","PRICING","ABOUT SMART PARK","HOME"];
var href = ["team.html","pricing.html","about.html","index.html"];
var logoDiv = document.getElementById("logo");
var logoText1 = "SMART P";
var logoText2 = "RK";
var logoh1 = document.createElement('h1');
var logoImage = document.createElement('img');

a1 = document.createElement('a')

a1.href = "index.html";

a1.style.padding = "23px";
a1.style.fontSize = "30";
logoImage.width = "29";
logoImage.height = "23";
logoImage.style.padding= "0 3px 0 3px";
logoImage.src = "REALPNGCAR.png";
logoImage.alt = "car";

logoh1.innerHTML = logoText1;
logoh1.appendChild(logoImage);
logoh1.innerHTML += logoText2;

a1.innerHTML = logoh1.innerHTML;

logoDiv.appendChild(a1);


for (i=0; i<options.length; i++){

    a = document.createElement('a');
    a.href = href[i];
    a.innerHTML = options[i];
    optionsDiv.appendChild(a)
}




