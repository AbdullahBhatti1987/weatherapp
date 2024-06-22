const citieslocation = [
    { name: "Karachi", lat: 24.8615, lon: 67.0099 },
    { name: "Lahore", lat: 31.5204, lon: 74.3587 },
    { name: "Islamabad", lat: 33.6844, lon: 73.0479 },
    { name: "Hyderabad", lat: 25.396, lon: 68.3608 },
    { name: "Mirpur Khas", lat: 25.426, lon: 69.3549 },
    { name: "Multan", lat: 30.1575, lon: 71.5249 },
    { name: "Gwadar", lat: 24.8478, lon: 66.975 },
    { name: "Sukkur", lat: 27.7052, lon: 68.8574 },
    { name: "Sialkot", lat: 32.4945, lon: 74.5229 },
    { name: "Rawalpindi", lat: 33.6844, lon: 73.0479 },
    { name: "Murree", lat: 33.9062, lon: 73.3903 },
    { name: "Swat", lat: 35.222, lon: 72.4258 },
    { name: "Naran", lat: 34.9075, lon: 73.6551 },
    { name: "Kaghan", lat: 34.5967, lon: 73.3433 },
    { name: "Gilgit", lat: 35.8785, lon: 74.4642 },
    { name: "Skardu", lat: 35.2897, lon: 75.6373 },
    { name: "Faisalabad", lat: 31.4504, lon: 73.135 },
    { name: "Peshawar", lat: 34.0151, lon: 71.5249 },
    { name: "Quetta", lat: 30.1798, lon: 66.975 },
    { name: "Bahawalpur", lat: 29.3956, lon: 71.6836 },
    { name: "Sargodha", lat: 32.0836, lon: 72.6711 },
    { name: "Jhang", lat: 31.2681, lon: 72.3186 },
    { name: "Sahiwal", lat: 30.6708, lon: 73.1069 },
    { name: "Sheikhupura", lat: 31.7131, lon: 73.9783 },
    { name: "Gujranwala", lat: 32.1617, lon: 74.1883 },
    { name: "Dera Ghazi Khan", lat: 30.0572, lon: 70.6367 },
    { name: "Larkana", lat: 27.5512, lon: 68.2135 },
    { name: "Kasur", lat: 31.1154, lon: 74.4463 },
    { name: "Rahim Yar Khan", lat: 28.4194, lon: 70.3034 },
    { name: "Mardan", lat: 34.1982, lon: 72.0451 },
    { name: "Okara", lat: 30.8081, lon: 73.4458 },
    { name: "Sanghar", lat: 26.0466, lon: 68.9481 },
    { name: "Chiniot", lat: 31.7206, lon: 72.9784 },
    { name: "Jhelum", lat: 32.9344, lon: 73.731 },
    { name: "Abbottabad", lat: 34.1463, lon: 73.2117 },
    { name: "Khushab", lat: 32.2958, lon: 72.3525 },
    { name: "Dera Ismail Khan", lat: 31.8294, lon: 70.9017 },
    { name: "Muzaffargarh", lat: 30.0703, lon: 71.1937 },
    { name: "Attock", lat: 33.7731, lon: 72.3624 },
    { name: "Mansehra", lat: 34.3303, lon: 73.1968 },
    { name: "Chaman", lat: 30.9236, lon: 66.4512 },
    { name: "Zhob", lat: 31.3408, lon: 69.4493 },
    { name: "Mianwali", lat: 32.5851, lon: 71.5436 },
    { name: "Kohat", lat: 33.5561, lon: 71.4493 },
    { name: "Hafizabad", lat: 32.0709, lon: 73.688 },
    { name: "Khanewal", lat: 30.3018, lon: 71.932 },
    { name: "Gojra", lat: 31.1506, lon: 72.6822 },
    { name: "Kharian", lat: 32.8106, lon: 73.8659 },
    { name: "Mandi Bahauddin", lat: 32.5868, lon: 73.4918 },
    { name: "Karak", lat: 33.1167, lon: 71.0935 },
    { name: "Turbat", lat: 26.0031, lon: 63.0474 },
    { name: "Dadu", lat: 26.7303, lon: 67.7769 },
    { name: "Tando Adam", lat: 25.7684, lon: 68.6624 },
    { name: "Nawabshah", lat: 26.2483, lon: 68.4096 },
    { name: "Jhang", lat: 31.2681, lon: 72.3186 },
    { name: "Pakpattan", lat: 30.341, lon: 73.3866 },
    { name: "Khuzdar", lat: 27.8116, lon: 66.6104 },
    { name: "Shikarpur", lat: 27.9571, lon: 68.6382 },
    { name: "Mastung", lat: 29.7997, lon: 66.8457 },
    { name: "Parachinar", lat: 33.8996, lon: 70.1007 },
    { name: "Tando Allahyar", lat: 25.4622, lon: 68.7214 },
    { name: "Khairpur", lat: 27.5295, lon: 68.7617 },
    { name: "Badin", lat: 24.6554, lon: 68.8383 },
    { name: "Charsadda", lat: 34.1456, lon: 71.7311 },
    { name: "Bhakkar", lat: 31.6331, lon: 71.0657 },
    { name: "Chishtian", lat: 29.7983, lon: 72.8561 },
    { name: "Sadiqabad", lat: 28.3062, lon: 70.1265 },
    { name: "Haripur", lat: 33.9947, lon: 72.9334 },
    { name: "Layyah", lat: 30.9613, lon: 70.936 },
    { name: "Tando Muhammad Khan", lat: 25.1239, lon: 68.5346 },
    { name: "Tank", lat: 32.2219, lon: 70.3832 },
    { name: "Hangu", lat: 33.5287, lon: 71.0592 },
    { name: "Sujawal", lat: 24.6076, lon: 68.0798 },
    { name: "Nowshera", lat: 34.0151, lon: 71.9743 },
    { name: "Moro", lat: 26.664, lon: 68.001 },
    { name: "Umerkot", lat: 25.3612, lon: 69.7373 },
    { name: "Chakwal", lat: 32.9328, lon: 72.8549 },
    { name: "Narowal", lat: 32.101, lon: 74.8744 },
    { name: "Bhakkar", lat: 31.6269, lon: 71.0643 },
    { name: "Kamber", lat: 27.5916, lon: 68.0001 },
    { name: "Khanpur", lat: 28.6477, lon: 70.6563 },
    { name: "Kundian", lat: 32.4593, lon: 71.4778 },
    { name: "Lodhran", lat: 29.5409, lon: 71.6336 },
    { name: "Pasrur", lat: 32.2642, lon: 74.6633 },
    { name: "Tando Jam", lat: 25.4284, lon: 68.5328 },
    { name: "Bannu", lat: 32.9869, lon: 70.6053 },
    { name: "Hala", lat: 25.8125, lon: 68.4182 },
    { name: "Jamshoro", lat: 25.4323, lon: 68.2767 },
    { name: "Kotri", lat: 25.3653, lon: 68.3114 },
    { name: "Matli", lat: 25.046, lon: 68.6551 },
    { name: "Dera Allah Yar", lat: 28.3738, lon: 68.3492 },
    { name: "Chaman", lat: 30.9252, lon: 66.4515 },
    { name: "Shahdadpur", lat: 25.9231, lon: 68.6196 },
    { name: "Qambar", lat: 27.5916, lon: 68.0001 },
    { name: "Shahdadkot", lat: 27.8479, lon: 67.9068 },
    { name: "Kandhkot", lat: 28.244, lon: 69.1822 },
    { name: "Hub", lat: 25.024, lon: 66.9716 },
    { name: "Uthal", lat: 25.8022, lon: 66.6224 },
    { name: "New York City", lat: 40.7128, lon: -74.0060 },
    { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
    { name: "Chicago", lat: 41.8781, lon: -87.6298 },
    { name: "London", lat: 51.5074, lon: -0.1278 },
    { name: "Paris", lat: 48.8566, lon: 2.3522 },
    { name: "Berlin", lat: 52.5200, lon: 13.4050 },
    { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
    { name: "Beijing", lat: 39.9042, lon: 116.4074 },
    { name: "Sydney", lat: -33.8688, lon: 151.2093 },
    { name: "Moscow", lat: 55.7558, lon: 37.6173 },
    { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
    { name: "Dubai", lat: 25.2048, lon: 55.2708 },
    { name: "Singapore", lat: 1.3521, lon: 103.8198 },
    { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
    { name: "Bangkok", lat: 13.7563, lon: 100.5018 },
    { name: "Rome", lat: 41.9028, lon: 12.4964 },
    { name: "Madrid", lat: 40.4168, lon: -3.7038 },
    { name: "Istanbul", lat: 41.0082, lon: 28.9784 },
    { name: "Cairo", lat: 30.0444, lon: 31.2357 },
    { name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
    { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
    { name: "Toronto", lat: 43.6532, lon: -79.3832 },
    { name: "Mexico City", lat: 19.4326, lon: -99.1332 },
    { name: "Seoul", lat: 37.5665, lon: 126.9780 },
    { name: "Jakarta", lat: -6.2088, lon: 106.8456 },
    { name: "Lagos", lat: 6.5244, lon: 3.3792 },
    { name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869 },
    { name: "Bangkok", lat: 13.7563, lon: 100.5018 },
    { name: "Delhi", lat: 28.6139, lon: 77.2090 },
    { name: "Manila", lat: 14.5995, lon: 120.9842 },
    { name: "Riyadh", lat: 24.7136, lon: 46.6753 },
    { name: "Lisbon", lat: 38.7223, lon: -9.1393 },
    { name: "Athens", lat: 37.9838, lon: 23.7275 },
    { name: "Vienna", lat: 48.2082, lon: 16.3738 }
  
];
    const apiKey = '7b3193d45d68e8020d9ba908351762fc';
    const cityName = document.getElementById('cityName')
    let matchlocation = document.getElementById('findlocation')
    let confirmCity = [];
    cityName.addEventListener('focusout', function(){    
      const city = citieslocation.filter((data) => 
        data.name.includes(cityName.value.toLowerCase()) || data.name.toLowerCase() === cityName.value.toLowerCase() 
    );
      console.log(city)
      confirmCity = [];
      confirmCity.push(city[0])
      matchlocation.innerText = city[0].name;
      cityName.value = '';
        abc()
      })
      
      function abc(){
        const obj = {
          city: confirmCity[0].name,
          lat: confirmCity[0].lat,
          lon: confirmCity[0].lon,
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj.lat}&lon=${obj.lon}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log('Weather data:', data);
          let weatherArray = [];
          if (data && data.daily) {
            weatherArray = data.daily;
              }
              var currentTemp = document.getElementById('currenttemp');
              var temp = data.main.temp-273
              currentTemp.innerText = parseInt(temp);

              var feelLike = document.getElementById('feelLike')
              var feelTemp = data.main.feels_like-273
              feelLike.innerText = parseInt(feelTemp);

              var humidity = document.getElementById('humidity')
              var humidityTemp = data.main.humidity
              humidity.innerText = parseInt(humidityTemp);

              var weatherName = document.getElementById('weatherName')
              var weatherTemp = data.weather[0].main;
              weatherName.innerText = weatherTemp;
              humidity.innerText = parseInt(humidityTemp);

              var priciption = document.getElementById('priciption')
              var priciptionTemp = data.wind.speed;
              priciption.innerText = priciptionTemp;

              var visibility = document.getElementById('visibility')
              var visibilityTemp = data.visibility/1000;
              visibility.innerText = visibilityTemp;


          }
          )  
      }
      















// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}





var hourlyDiv = document.getElementById("hourly");
const hours = [];

for (var i = 0; i < 24; i++) {
  hours.push(i + 1);
}

const dailyweather = () => {
  hourlyDiv.innerHTML = "";
  const time = hours.forEach((data, ind) => {
    const hourTemp = `
                    <div class="hour">
                        <span>${ind}:00</span>
                        <h4>28<sup>o</sup></h4>
                        <span><i class="fa-solid fa-cloud"></i></span>
                    </div>
                    `;
    hourlyDiv.innerHTML += hourTemp;
  });
};
dailyweather();

var monthlyDiv = document.getElementById("date");
const dates = [];

for (var i = 0; i < 30; i++) {
  dates.push(i + 1);
}

const monthlyweather = () => {
  monthlyDiv.innerHTML = "";
  const time = dates.forEach((data, ind) => {
    const hourTemp = `
                    <div class="time">
                        <span>${ind + 1}</span>
                        <span>${data}/6</span>
                        <h4>28<sup>o</sup></h4>
                        <span><i class="fa-solid fa-cloud"></i></span>
                    </div>
                    `;
    monthlyDiv.innerHTML += hourTemp;
  });
};
monthlyweather();
