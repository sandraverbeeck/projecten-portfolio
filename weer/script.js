

const latitude = 51.0188;
const longitude = 4.78263;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`;

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    const weatherCode = data.current_weather.weathercode;
    const weatherImage = getWeatherImage(weatherCode);

    const pictureElement = document.getElementById("picture");
    pictureElement.style.backgroundImage = `url('${weatherImage}')`;

    const weatherQuote = getWeatherQuote(weatherCode);

    const quoteElement = document.getElementById("quote"); 
    quoteElement.innerHTML = weatherQuote;


}

getWeather();

function getWeatherImage(code) {
    if ([0, 1, 2].includes(code)) return "sunny.png";
    if (code === 3) return "bewolkt.png";
    if ([51, 53, 55].includes(code)) return "drizzle.png";
    if ([61, 63, 65].includes(code)) return "regen.png";
    if ([71, 73, 75].includes(code)) return "sneeuw.png";
    if ([45, 48].includes(code)) return "mistig.png";
    if (code >= 95) return "ongweer.png";

    return "weer icon.jpg";
}

function getWeatherQuote(code) {
    if ([0, 1, 2].includes(code)) return "It's sunny outside!";
    if (code === 3) return "It's cloudy outside!";
    if ([51, 53, 55].includes(code)) return "It's drizzling outside!";
    if ([61, 63, 65].includes(code)) return "It's raining outside!";
    if ([71, 73, 75].includes(code)) return "It's snowing outside!";
    if ([45, 48].includes(code)) return "It's misty outside!";
    if (code >= 95) return "There is a storm outside!";

    return "We are not sure what the weather is like.";
}
