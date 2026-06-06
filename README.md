# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# WTWR — What To Wear?

WTWR is a weather‑based clothing recommendation app built with React and Vite.  
It helps users decide what to wear based on the current weather in their location.  
Users can view clothing items, open item previews, and add new garments through a modal form.

---

## ✨ Features

- Real‑time weather display (temperature in Fahrenheit)
- Weather‑based clothing recommendations
- Clothing card grid with images and titles
- Clickable clothing cards that open a preview modal and shows weather type the item is good for (later on can have things like brand color size per the users description)
- Add new garments using a reusable modal form
- Responsive layout
- Component‑based architecture

---

## 🧩 Technologies Used

- React (functional components + hooks)
- Vite
- JavaScript (ES6+)
- CSS (component‑based styling)
- Normalize.css
- OpenWeatherMap API
- Prettier (code formatting)

---

## 📁 Project Structure

src/  
 assets/
blocks/
components/  
 App/  
 Header/  
 Main/  
 Footer/  
 ItemCard/  
 ItemModal/  
 AddClothesModal/  
 ModalWithForm/  
 WeatherCard/  
 utils/  
 clothingItems.js  
 constants.js  
 weatherApi.js  
 assets/  
 images/  
 index.css  
 main.jsx

public/  
index.html

---

## 🧠 Key Functionality

### App.jsx

- Stores weather data
- Stores clothing items
- Controls which modal is open
- Renders Header, Main, Footer, ItemModal, AddClothesModal

### Header

- Displays city and current date
- “Add Clothes” button opens modal
- "Add clothes" also closes with background touch or press of the esc key
- ( later on user will be able to change their name and profile icon )

### Main

- Renders WeatherCard and clothing grid
- Filters clothing by weather type
- (would be great to get the cards to make matching outfits that are eye pleasing instead of just a random suggestion )

### WeatherCard

- Displays temperature in Fahrenheit
- Shows weather background image
- (will later show the time and weather change and during AM or PM)

### ItemCard

- Shows clothing image and title
- Opens preview modal on click
- Closes on background click or esc key touch

### ItemModal

- Shows enlarged item image and title ( will later be changed to allow the user to rename their clothing item to whatever they choose)

### AddClothesModal

- Reusable form modal using ModalWithForm
- Adds new clothing items to the main page, allows the user to click trough and view each item

### ModalWithForm

- Handles overlay click, ESC close, submit button, and layout

---

## 🌦 Weather API

The project uses OpenWeatherMap to fetch:

- Temperature
- Weather conditions
- City name

API logic is stored in:
src/utils/weatherApi.js

---

## 🚀 Getting Started

Install dependencies:
