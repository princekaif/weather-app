
# Weather App 🌦️

The Weather App allows users to search for current weather and forecast data for any city. It fetches data from the OpenWeather API and displays it in a user-friendly format, including temperature, weather conditions, and a 5-day forecast.


## Features
- 🌤 Current Weather: Displays temperature, weather conditions, and city name.
- 🌧 5-Day Forecast: Shows weather forecasts, including temperature and conditions for the next five days.
- 🌍 City Search: Search by city name and retrieve accurate weather data.
- 💻 Responsive Design: Adaptable UI that works across various screen sizes and devices.

## Tech Stack

* HTML5: For the structure of the app.
* CSS3: For styling the application.
* JavaScript (ES6+): For making API calls and updating the DOM.
* OpenWeatherMap API: Fetches weather data and forecasts for the app.
## Installation & Setup

- Clone the repository:

```bash
  git clone https://github.com/princekaif/weather-app.git
```
- Navigate into the project directory:
```bash
cd weather-app
```
- Open the index.html file in your browser: You can simply double-click the index.html file or run a live server from your code editor (like VSCode's Live Server extension).



## usage instruction

- Enter a city name into the search bar.
- Click the Search button.
- The current weather and the 5-day forecast will be displayed below the search input.
## Output
![Screenshot 2024-08-26 105116](https://github.com/user-attachments/assets/eadfd365-34ce-41dd-9826-d089e1a0fade)





https://github.com/user-attachments/assets/e0204ef3-089f-4bb9-8f0d-3d36d05ff3df



## API Reference

#### Get api

```http
https://openweathermap.org/api
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
 const apiKey = 'your-api-key';
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

