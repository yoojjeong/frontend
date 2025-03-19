// httpStatisticsService.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8090/app/statistics",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${accessToken}`,
  },
});

const today = new Date();
const salesDate = today.toISOString().split("T")[0];

export async function fetchTodaySales() {
  const response = await instance.get(`/salesHourly/${salesDate}`);
  return response;
}

export async function fetchGetSales({ date }) {
  const response = await instance.get(`/salesHourly/${date}`);
  return response;
}
