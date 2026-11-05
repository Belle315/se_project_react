# WTWR — What To Wear?

WTWR is a weather-based clothing recommendation application built using React and Vite. The application helps users choose clothing suitable for the current weather while allowing them to manage their personal clothing collection.

## Features

- Displays current weather information using the OpenWeatherMap API.
- Allows users to switch between Fahrenheit and Celsius.
- Recommends clothing based on hot, warm, or cold weather.
- Displays clothing cards with images and names.
- Opens a detailed preview when a clothing card is selected.
- Allows users to add and delete garments.
- Includes a confirmation dialog before deleting an item.
- Saves clothing data using `json-server` and `db.json`.
- Provides a profile page with clothing pagination.
- Supports responsive layouts.

## Pitch Video

https://drive.google.com/file/d/1wYc6WAnf8r34xuzVRbUtl5NvzWy_jMpM/view?usp=sharing

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- CSS
- React Router
- React Hooks and Context API
- OpenWeatherMap API
- JSON Server
- ESLint
- Prettier

## Project Structure

The application uses reusable React components organized within the `src/components` directory.

Key components include:

- **App** — Manages application state, routing, and API interactions.
- **Header** — Displays navigation, date, city, and temperature toggle.
- **Main** — Filters and displays clothing recommendations.
- **WeatherCard** — Displays the current temperature.
- **ItemCard** — Displays individual clothing items.
- **ItemModal** — Displays clothing previews and deletion confirmation.
- **AddClothesModal** — Handles adding new garments.
- **ModalWithForm** — Provides reusable modal form structure.
- **Profile** — Displays the user's clothing collection.
- **ClothesSection** — Displays garments with pagination.
- **SideBar** — Displays profile information.
- **ToggleSwitch** — Changes the displayed temperature unit.

Additional application files include:

- `src/utils/api.js` — Handles clothing API requests.
- `src/utils/WeatherApi.js` — Fetches weather information.
- `src/hooks/useForm.js` — Manages form input values.
- `src/contexts/CurrentTemperatureUnitContext.js` — Provides temperature-unit state.
- `db.json` — Stores clothing data for the local mock API.

## API Integration

WTWR communicates with two APIs.

**OpenWeatherMap API**

Retrieves weather information including the current temperature and city. The application uses this information to recommend clothing suitable for the weather.

**JSON Server**

Provides a local mock REST API for clothing data.

- GET — Retrieves saved clothing items.
- POST — Adds new clothing items.
- DELETE — Removes clothing items.

## Getting Started

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Navigate into the project:

```bash
cd se_project_react
```

Install dependencies:

```bash
npm install
```

Configure an active OpenWeatherMap API key in the project's weather API configuration.

Start the development environment:

```bash
npm run dev
```

This starts Vite and the local JSON Server, which serves clothing data on port 3001.

## Testing and Build

Run ESLint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Future Improvements

Planned improvements include:

- Creating complete outfit recommendations based on clothing combinations.
- Allowing users to edit garment names and descriptions.
- Supporting additional garment details such as brand, color, and size.
- Allowing users to customize their profile information.
- Displaying additional weather information.

## Developer

Developed by Jennifer Rivera — 2026.
