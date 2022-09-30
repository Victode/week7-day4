// function getWeather(city) {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e325c95def146ec0f6463c1ba75ad893`)
//     .then((res) => res.json())
//     .then((data) => weatherApp(data))
// }
// function weatherApp(data, type) {
//     console.log(data)
    
//     for (i of data) {
//             if (i.type == type || type == '') {

//                 let weatherHigh = i.main.temp_max
//                 let weatherLow = i.main.temp_low
//                 let weatherForecast = i.weather.main
//                 let weatherHumidity = i.main.humidity
             

//                 let clone = myTemplate.content.cloneNode(true); 
//                 let td = clone.querySelectorAll('td') 

//                 td[0].textContent = weatherHigh
//                 td[1].textContent = weatherLow
//                 td[2].textContent = weatherForecast
//                 td[3].textContent = weatherHumidity
 

//                 tableBody.appendChild(clone);
//             }
//         } 
//     }
    
// const myForm = document.getElementById('form')

// myForm.addEventListener('submit', (event) => {
//     event.preventDefault()
//     tableBody.innerHTML = ''
//     const myForm = document.getElementById('form')
//     formData = new FormData(myForm)
//     let myList = []
//     for (const [key, value] of formData) {
//         myList.push(value)
//     }
//     console.log(myList)
//     getWeather(myList)
// })

// getWeather('chicago')
let weather = {
    apiKey: "e325c95def146ec0f6463c1ba75ad893",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { temp_min, temp_max} = data.main;

     
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = ((temp *1.8) +32) + "°F";
      document.querySelector(".temp_min").innerText = "Min: " + ((temp_min *1.8) +32) + "°F";
      document.querySelector(".temp_max").innerText = "Max: " + ((temp_max *1.8) +32) + "°F";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");