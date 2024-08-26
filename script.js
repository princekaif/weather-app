const apiKey = '6189735c1d4ac8865e9aa7897442cd71';


// Function to display current weather
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather-data');
    const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
    const weatherCondition = data.weather[0].description;
    const cityName = data.name;

    weatherDiv.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weatherCondition}</p>
    `;
}

// Function to search and fetch current weather for a city
function searchWeather() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

// Function to display 5-day weather forecast
function displayForecast(data) {
    const forecastDiv = document.getElementById('forecastData');
    forecastDiv.innerHTML = '';  // Clear previous forecast

    const dailyForecasts = {};

    // Loop through each forecast item
    data.list.forEach(item => {
        const date = new Date(item.dt_txt);
        const day = date.toDateString();

        // Check if we already have a forecast for this day
        if (!dailyForecasts[day]) {
            const temperature = Math.round(item.main.temp - 273.15);  // Convert from Kelvin to Celsius
            const weatherCondition = item.weather[0].description;

            // Store the first forecast for each day
            dailyForecasts[day] = `
                <div>
                    <h3>${day}</h3>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Condition: ${weatherCondition}</p>
                </div>
            `;
        }
    });

    // Append the unique daily forecasts to the forecastDiv
    Object.values(dailyForecasts).forEach(forecastItem => {
        forecastDiv.innerHTML += forecastItem;
    });
}


// Function to fetch the 5-day weather forecast
function getForecast() {
    const city = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayForecast(data))
        .catch(error => console.error('Error:', error));
}

// Attach the search and forecast functions to the button click
document.getElementById('get-weather-btn').addEventListener('click', () => {
    searchWeather();
    getForecast();
});

// -------------------------------------------------------------------------------------------
// // // Display current weather data

// // // Display 5-day weather forecast
// // function displayForecast(data) {
// //     const forecastDiv = document.getElementById('forecastData');
// //     forecastDiv.innerHTML = '';  // Clear previous forecast

// //     data.list.forEach(item => {
// //         const date = new Date(item.dt_txt);
// //         const temperature = Math.round(item.main.temp - 273.15);  // Convert from Kelvin to Celsius
// //         const weatherCondition = item.weather[0].description;

// //         const forecastItem = document.createElement('div');
// //         forecastItem.innerHTML = `
// //             <h3>${date.toDateString()}</h3>
// //             <p>Temperature: ${temperature}°C</p>
// //             <p>Condition: ${weatherCondition}</p>
// //         `;
        
// //         forecastDiv.appendChild(forecastItem);  // Append the forecast to the div
// //     });
// // }

// // // Fetch and display weather forecast
// // function getForecast() {
// //     const city = document.getElementById('city-input').value;
    
// //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
// //         .then(response => response.json())
// //         .then(data => displayForecast(data))
// //         .catch(error => console.error('Error:', error));
// // }

// // const apiKey='c3437a78bd9950baf0bdfd7b24855407';
// // // // const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;


// // // // //fetch data

// // // const city = 'london';

// function displayWeather(data) {
//     const weatherDiv = document.getElementById('weather-data');
//     const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
//     const weatherCondition = data.weather[0].description;
//     const cityName = data.name;

//     weatherDiv.innerHTML = `
//         <h2>${cityName}</h2>
//         <p>Temperature: ${temperature}°C</p>
//         <p>Condition: ${weatherCondition}</p>
//     `;
// }

// // // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
// // //     .then(response => response.json())
// // //     .then(data => displayWeather(data))
// // //     .catch(error => console.error('Error:', error));


// function searchWeather() {
//     const city = document.getElementById('city-input').value;
//     fetch(`https://api.openweathermap.org/data/3.0/weather?q=${city}&appid=${apiKey}`)
//         .then(response => response.json())
//         .then(data => displayWeather(data))
//         .catch(error => console.error('Error:', error));
// }
// function displayForecast(data){
// const forecastdiv=document.getElementById('forecastData');
// forecastdiv.innerHTML=' ';
// data.list.forEach(item => {
//     const date =new date(item.dt_txt);
//     const temperature=Math.round(item.main.temp-273.15);
//     const weatherCondition=item.weather[0].description;
//     forecastdiv.innerHTML=`   <div>
//                 <h3>${date.toDateString()}</h3>
//                 <p>Temperature: ${temperature}°C</p>
//                 <p>Condition: ${weatherCondition}</p>
//             </div>`;
    
// });
// }
// function getForecast() {
//     const city = document.getElementById('city-input').value;
    
//     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
//         .then(response => response.json())
//         .then(data => displayForecast(data))
//         .catch(error => console.error('Error:', error));
