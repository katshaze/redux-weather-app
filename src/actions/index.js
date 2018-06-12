import axios from 'axios';

const API_KEY = '03c81b89f5da07b83fc8d759465a73db';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},aus`;
  // axios get request that returns a promise stored in 'request' variable.
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// AJAX requests in redux: we're entering the land of middleware because we get back a promise and don't want to pass that straight to the reducers.

// Middlewares are functions that take an action, and depending on the action's type and the action's payload, or any other number of factors, the middleware can decide to let the action pass through, or manipulate it, or console log it or stop it, etc. before they reach any reducer. So they're kinda like gatekeepers - between the actions trying to get to the reducers.

// redux-promise is a middleware npm package for redux to help handle ajax requests in our app.

// we imported redux-promise into index.js for the whole app. It will see that the value for payload is a promise and, because it's a promise, will stop the action, wait for it to resolve, then send through the resolved request to the reducers.
