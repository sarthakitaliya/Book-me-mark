import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.API_URL || "http://localhost:3000/api",
  withCredentials: true,
});