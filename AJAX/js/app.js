const weatherAPI =
  "http://api.weatherapi.com/v1/forecast.json?key=5f07210126ea499fa3341319230410&q=Surabaya&days=8&aqi=no";

const container = document.getElementById("container");

fetch(weatherAPI)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const location = data.location.name; 

    const locationTitle = document.createElement("h2");
    locationTitle.textContent = location;
    locationTitle.style.textAlign = "center";
    locationTitle.style.color = "pink"; 
    locationTitle.style.fontSize = "40px"; 

    // Append the location title to the container
    container.appendChild(locationTitle);

    let topRow = "";
    let bottomRow = "";

    // Loop through the next 8 days of weather forecasts
    for (let i = 0; i < 8; i++) {
      const day = data.forecast.forecastday[i];
      const card = showElement(day);

      // Alternate between top and bottom rows
      if (i < 4) {
        topRow += card;
      } else {
        bottomRow += card;
      }
    }

    // Create two row containers
    const topRowContainer = document.createElement("div");
    topRowContainer.className = "row";
    topRowContainer.innerHTML = topRow;

    const bottomRowContainer = document.createElement("div");
    bottomRowContainer.className = "row";
    bottomRowContainer.innerHTML = bottomRow;

    container.appendChild(topRowContainer);
    container.appendChild(bottomRowContainer);
  });

function showElement(day) {
  return `<div class="box" style="background-color: #f2f2f2; border: 1px solid #ccc; padding: 10px; margin: 10px; display: flex; justify-content: space-between; align-items: center;">
        <div style="padding-left: 10px;">
            <h3>${day.date}</h3>
            <h1>${day.day.avgtemp_c} ℃</h1>
        </div>
        <div>
            <img src="https:${day.day.condition.icon}" alt="">
            <p>${day.day.condition.text}</p>
        </div>
    </div>`;
}
