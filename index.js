/*var weather_response;
var APPID = "18bf16b50ee65ca9355bdd96f0540dbc";
var cities = [];

function city_choices_load() {

  var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var response = JSON.parse(xmlhttp.responseText);

        for(i=0;i<response.length;i++)
        {
          cities.push(response[i]["name"]);
        }
          
      }    
  }

  xmlhttp.open("GET", "file/city.list.json", true);
  xmlhttp.send();

}

document.onload = city_choices_load()

function city_choices()
{
  var ul = document.getElementById("list");

  if(ul!=null)
  ul.remove();

  var city_to_display  = [];
  var city_input = document.getElementById("city");
  var city_input_in_uppercase = city_input.value.charAt(0).toUpperCase() + city_input.value.slice(1);
  var ul = document.createElement("ul");
  ul.setAttribute("id","list");

  if(city_input.value!="")
  {
    for(var i=0;i<cities.length;i++)
    {
      if(cities[i].startsWith(city_input.value) || cities[i].startsWith(city_input_in_uppercase))
      city_to_display.push(cities[i]);
    }

    if (city_to_display.length > 20)
    city_to_display = city_to_display.slice(0,20);

    for(var i=0;i<city_to_display.length;i++)
    {
      var li = document.createElement("li");

      var a = document.createElement("a");
      a.setAttribute("href","#");
      a.appendChild(document.createTextNode(city_to_display[i]));

      li.append(a);

      li.addEventListener("onmouseover",function() {
        console.log(this);
      })

      li.addEventListener("click",function() {
        document.getElementById("city").value = this.textContent;
      })

      ul.appendChild(li);
    }

    document.getElementById("options").appendChild(ul);

  }

}

function weather_display() {

  var city = document.getElementById("city").value;

  var ul = document.getElementById("list");
  
  if(ul!=null)
  ul.remove();

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var response = this.response;
            weather_response = JSON.parse(response);

            document.getElementById("weather").innerHTML = `The weather in ${ weather_response.name }, ${ weather_response.sys.country } is ${ weather_response.main.temp }F`
            document.getElementById("description").innerHTML = `There will be ${ weather_response.weather[0].description } and the humidity is at ${ weather_response.main.humidity}`
        }
        else if(this.status == 404)
        console.log("Invalid Request");
      }
    xhttp.open("GET",`http://api.openweathermap.org/data/2.5/weather?q=${ city }&APPID=${ APPID }`,true);
    xhttp.send();
}

*/

var weather_response;
var APPID = "18bf16b50ee65ca9355bdd96f0540dbc";
var cities = [];

function city_choices_load() {

  var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

  xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var response = JSON.parse(xmlhttp.responseText);

        for(i=0;i<response.length;i++)
        {
          cities.push(response[i]["name"]);
        }
          
      }    
  }

  xmlhttp.open("GET", "file/city.list.json", true);
  xmlhttp.send();

}

document.onload = city_choices_load()

function city_choices()
{
  var ul = document.getElementById("list");

  if(ul!=null)
  ul.remove();

  var city_to_display  = [];
  var city_input = document.getElementById("city");
  var city_input_in_uppercase = city_input.value.charAt(0).toUpperCase() + city_input.value.slice(1);
  var ul = document.createElement("ul");
  ul.setAttribute("id","list");

  if(city_input.value!="")
  {
      city_to_display = cities.filter( i=> i.startsWith(city_input.value) || i.startsWith(city_input_in_uppercase))
    
    if (city_to_display.length > 20)
    city_to_display = city_to_display.slice(0,20);

    for(var i=0;i<city_to_display.length;i++)
    {
      var li = document.createElement("li");

      var a = document.createElement("a");
      a.setAttribute("href","#");
      a.appendChild(document.createTextNode(city_to_display[i]));

      li.append(a);

      li.addEventListener("onmouseover",function() {
        console.log(this);
      })

      li.addEventListener("click",function() {
        document.getElementById("city").value = this.textContent;
      })

      ul.appendChild(li);
    }

    document.getElementById("options").appendChild(ul);

  }

}

function weather_display() {

  var city = document.getElementById("city").value;

  var ul = document.getElementById("list");
  
  if(ul!=null)
  ul.remove();

  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var response = this.response;
            weather_response = JSON.parse(response);

            document.getElementById("weather").innerHTML = `The weather in ${ weather_response.name }, ${ weather_response.sys.country } is ${ weather_response.main.temp }F`
            document.getElementById("description").innerHTML = `There will be ${ weather_response.weather[0].description } and the humidity is at ${ weather_response.main.humidity}`
        }
        else if(this.status == 404)
        console.log("Invalid Request");
      }
    xhttp.open("GET",`http://api.openweathermap.org/data/2.5/weather?q=${ city }&APPID=${ APPID }`,true);
    xhttp.send();
}
