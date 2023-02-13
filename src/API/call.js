import axios from "axios";

const BASE_URL = "http://localhost:5002/api";
const USER_URL = `${BASE_URL}/auth`;

export const fetchUserByEmail = (email) =>
  axios.post(`${USER_URL}/user-details`, { email: email });
