import axios from "axios";
import EventsList from "../data/eventsList.json";

const BASE_URL = "http://localhost:5002/api";
const USER_URL = `${BASE_URL}/auth`;
const EVENT_URL = `${BASE_URL}/event`;

console.log(EventsList);

export const fetchUserByEmail = (email) =>
  axios.post(`${USER_URL}/user-details`, { email: email });

// export const fetchEvents = () => axios.get(`${EVENT_URL}/`);

// export const fetchEventById = (id) => axios.get(`${EVENT_URL}/${id}`);

export const fetchEvents = () => {
  return EventsList;
};

export const fetchEventById = (id) => {
  return EventsList.find((i) => i.eventId === id);
};
