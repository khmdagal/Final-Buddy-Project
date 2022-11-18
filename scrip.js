function lightsfunction() {
  return [
    {
      name: "Incandescent",
      kWh: 60,
      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/TSCAN25BCCLEAR240CR.jpg",
    },
    {
      name: "Halogen",
      kWh: 90,
      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/HALOCAN20SESCLR.jpg",
    },
    {
      name: "Compact_Fluorescent",
      kWh: 65,
      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/AMBIENCE11SBCCAN.jpg",
    },
    {
      name: "LED",
      kWh: 70,
      image:
        "https://www.thelightbulb.co.uk/wp-content/uploads/2020/01/MASTERLEDCANDLE4SESDTF.jpg",
    },
    {
      name: "Filament_LED",
      kWh: 75,
      image:
        "https://www.assets.signify.com/is/image/PhilipsLighting/22e1aa6f994240808894a55d017da7c5?clipPathE=legacy_path&$pnglarge$",
    },
  ];
}

const bulbs = [
  {
    name: "Incandescent",
    watts: 60,
    imange: "imagesincandescent.jpeg",
   
  },
  {
    name: "Halogen",
    watts: 90,
    imange: "imageshalogen.jpeg",
    
  },
  {
    name: "Compact_Fluorescent",
    watts: 65,
    imange: "imagescompact_fluorescent.jpeg",
    
  },
  {
    name: "LED",
    watts: 70,
    imange: "imagesled.jpeg",
   
  },
  {
    name: "Filament_LED",
    watts: 75,
    image: "images\filament_led.jpeg",
    
  },
];

const container = document.querySelector("#display");
const select = document.querySelector("#select_id");

// global veriables
let mylights;
window.onload = () => {
  mylights = lightsfunction();
  values(lightsfunction());
};

function values(params) {
  for (let key of params) {
    createOptions(key);
  }
}

function createOptions(lights) {
  // calling html elements
  const displaySection = document.querySelector("#display_section");
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
  const priceSpan = document.querySelector("span");

  const value = e.target.value;

  image.setAttribute("src", "");

  //console.log(value);
  const light = mylights.find((light) => light.name === value);
  image.src = light.image;
  span.innerHTML = `${light.kWh * input.value * 0.18} watts`;

  // if (lights.name === value) {
  //   image.src = lights.image;
  //   span.innerHTML = `${lights.watts * input.value} watts`;
  // }

  //wattsPricesSection.appendChild(priceSpan);

  displaySection.appendChild(image);
});