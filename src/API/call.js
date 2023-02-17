import axios from "axios";
import EventsList from "../data/eventsList2.json";
import PapersList from "../data/ppList.json";
import WorkList from "../data/workList.json";

const BASE_URL = "http://localhost:5002/api";
const USER_URL = `${BASE_URL}/auth`;
const EVENT_URL = `${BASE_URL}/event`;

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

export const fetchPapers = () => {
  return PapersList;
};

export const fetchPaperById = (id) => {
  return PapersList.find((i) => i.ppid === id);
};

export const fetchWorkshops = () => {
  return WorkList;
}

export const fetchWorkshopById = (id) => {
  return WorkList.find((i) => i.wid === id);
}