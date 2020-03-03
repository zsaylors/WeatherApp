# Random Weather App

### [Live App](https://github.com/angular/angular-cli)

## How it works:
1.  The user specifies how many random locations they want weather from.
2.  Random latitudes and longitudes are generated using an API from [Random.org](https://www.random.org/clients/http/).
2.  With the random coordinates, anther API call is made to [Open Weather Map](https://openweathermap.org/current) to get the current weather at that location.
3.  A list of locations will appear.  When clicked it will show the current weather of that location.
4.  A along with the weather data a map will appear using a API all to [Mapbox](https://docs.mapbox.com/mapbox-gl-js/overview/)

## Technologies used
1. Visual Studio Code
2. Angular / Typescript
3. Bootstrap
4. HTML / CSS

## Running 
Download from GitHub, cd to the directory, and follow the following steps:

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.