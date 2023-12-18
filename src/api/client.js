// Importing the Axios library for making HTTP requests
import axios from "axios";

// Creating an Axios client instance with a base URL for the API
const client = axios.create({
  baseURL: "https://movieapp-ffa8.onrender.com/api",
});

export default client;
