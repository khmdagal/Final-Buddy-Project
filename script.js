function lightsfunction() {
  return [
    {
      name: "Incandescent",
      kWh: 0.01,
      cost: 0.028,

      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/TSCAN25BCCLEAR240CR.jpg",
    },
    {
      name: "Halogen",

      kWh: 0.012,

      cost: 0.028,

      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/HALOCAN20SESCLR.jpg",
    },
    {
      name: "Compact_Fluorescent",

      kWh: 0.01,

      cost: 0.028,

      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/AMBIENCE11SBCCAN.jpg",
    },
    {
      name: "Traditional LED bulb",
      kWh: 0.04,
      cost: 0.028,
      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/MASTERLEDCANDLE4SESDTF.jpg",
    },
    {
      name: "Filament_LED",
      kWh: 0.01,
      cost: 0.028,
      image:
        "https://www.assets.signify.com/is/image/PhilipsLighting/22e1aa6f994240808894a55d017da7c5?clipPathE=legacy_path&$pnglarge$",
    },
  ];
}

function seasonHours() {
  return [
    { Winter_Day_Hours: 8 },
    { Spring_Day_Hours: 13 },
    { Summar_Day_Hours: 16 },
    { Autumn_Day_Hours: 12 },
  ];
}

// global veriables
let mylights;

const container = document.querySelector("#display");
const select = document.querySelector("#select_id");
const dayLights = document.querySelector("#day_light_id");
const displaySection = document.querySelector("#display_section");

// for now dayLights dropdown will be display as non
dayLights.style.display = "none";

window.onload = () => {
  mylights = lightsfunction();
  getValues(lightsfunction(), seasonHours());
};

// this function loops the 'lightsfucntion' and 'seasonHours' functions
function getValues(light_types, dayhours) {
  for (let key of light_types) {
    createOptions(key);
  }

  for (let key of dayhours) {
    hours(key);
  }
}

// this function is hourse of the day based on seasons of the year
function hours(hours) {
  const dayHoursOptions = document.createElement("option");

  // want to change all _ to space
  // const time = Object.keys(hours).forEach((t) =>
  //   console.log(t.replace(/day/g, "time"))
  // );

  dayHoursOptions.innerHTML = Object.keys(hours);
  dayHoursOptions.value = Object.values(hours);

  dayLights.appendChild(dayHoursOptions);
}

function createOptions(lights) {
  // calling html elements

  const options = document.createElement("option");
  const wattsPricesSection = document.querySelector("#watts-prices-section");

  options.value = lights.name;
  options.innerText = lights.name;

  select.appendChild(options);
}

select.addEventListener("change", (e) => {
  const span = document.querySelector("#span_display_watt");
  const input = document.querySelector("#lights_quantity");
  const image = document.querySelector("#image");
  const table = document.querySelector("#table_id");
  table.style.display = "block";

  // call table elements
  const winterPerDay = document.querySelector("#Winter_PerDay");
  const winterTotal = document.querySelector("#Winter_total");

  const springPerDay = document.querySelector("#Spring_PerDay");
  const springTotal = document.querySelector("#Spring_total");

  const summarPerDay = document.querySelector("#Summar_PerDay");
  const summarTotal = document.querySelector("#Summar_total");

  const autumnPerDay = document.querySelector("#Autumn_PerDay");
  const autumnTotal = document.querySelector("#Autumn_total");

  // season a day hours
  const winterDayHours = 8;
  const springDayHour = 13;
  const summarDayHour = 16;
  const autumnDayHour = 12;

  // totat day hours for each season
  const winterTotalDayHours = 720;
  const springTotalDayHours = 1196;
  const summarTotalDayHours = 1472;
  const autumnTotalDayHours = 1092;

  const priceSpan = document.querySelector("span");

  const value = e.target.value;
  console.log(value);

  image.setAttribute("src", "");

  const light = mylights.find((light) => light.name === value);
  const costPerHourOfUse = light.kWh * input.value * light.cost;

  image.src = light.image;
  span.innerHTML =
    "This is estimated amount that you can save, if you switch off your lights during day-light time";

  // add value to the table based on 'cost per hour of use'
  winterPerDay.innerHTML = `£ ${
    Math.round((costPerHourOfUse * winterDayHours + Number.EPSILON) * 100) / 100
  }`;
  winterTotal.innerHTML = `£ ${
    Math.round(
      (costPerHourOfUse * winterTotalDayHours + Number.EPSILON) * 100
    ) / 100
  }`;

  springPerDay.innerHTML =
    Math.round((costPerHourOfUse * springDayHour + Number.EPSILON) * 100) / 100;
  springTotal.innerHTML =
    Math.round(
      (costPerHourOfUse * springTotalDayHours + Number.EPSILON) * 100
    ) / 100;

  summarPerDay.innerHTML =
    Math.round((costPerHourOfUse * summarDayHour + Number.EPSILON) * 100) / 100;
  summarTotal.innerHTML =
    Math.round(
      (costPerHourOfUse * summarTotalDayHours + Number.EPSILON) * 100
    ) / 100;

  autumnPerDay.innerHTML =
    Math.round((costPerHourOfUse * autumnDayHour + Number.EPSILON) * 100) / 100;
  autumnTotal.innerHTML =
    Math.round(
      (costPerHourOfUse * autumnTotalDayHours + Number.EPSILON) * 100
    ) / 100;

  displaySection.appendChild(image);
});

/*
next phase of the project we should created season selection drop down

dayLights.addEventListener("change", (e) => {
   const value = e.target.value;
  console.log(value);
});
*/

// if (lights.name === value) {
//   image.src = lights.image;
//   span.innerHTML = `${lights.watts * input.value} watts`;
// }

//wattsPricesSection.appendChild(priceSpan);

// const bulbs = [
//   {
//     name: "Incandescent",
//     watts: 60,
//     imange: "imagesincandescent.jpeg",

//   },
//   {
//     name: "Halogen",
//     watts: 90,
//     imange: "imageshalogen.jpeg",

//   },
//   {
//     name: "Compact_Fluorescent",
//     watts: 65,
//     imange: "imagescompact_fluorescent.jpeg",

//   },
//   {
//     name: "LED",
//     watts: 70,
//     imange: "imagesled.jpeg",

//   },
//   {
//     name: "Filament_LED",
//     watts: 75,
//     image: "images\filament_led.jpeg",

//   },
// ];
