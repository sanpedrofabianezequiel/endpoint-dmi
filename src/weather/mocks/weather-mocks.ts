import { IWeather } from "../interfaces";

const WEATHER: IWeather[] = [
    {
      coord: { lon: 139, lat: 35 },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      base: "stations",
      main: {
        temp: 281.52,
        feelsLike: 278.99,
        tempMin: 280.15,
        tempMax: 283.71,
        pressure: 1016,
        humidity: 93,
      },
      visibility: 10000,
      wind: {
        speed: 0.47,
        deg: 107.538,
      },
      clouds: {
        all: 2,
      },
      dt: 1560350192,
      sys: {
        type: 3,
        id: 2019346,
        country: "JP",
        sunrise: 1560281377,
        sunset: 1560333478,
      },
      timezone: 32400,
      id: 1851632,
      name: "Shuzenji",
      cod: 200,
    },
  ];