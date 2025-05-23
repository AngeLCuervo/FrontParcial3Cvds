import axios from "axios";

const BASE_URL = "https://localhost:8080/api/v1";

export const getSpecialties = () => axios.get(`${BASE_URL}/specialties`);
export const getSpecialty = (name) => axios.get(`${BASE_URL}/specialties/${name}`);
export const scheduleAppointment = (data) => axios.post(`${BASE_URL}/appointments`, data);
export const getAppointments = (email) => axios.get(`${BASE_URL}/appointments/history`, { params: { email } });
export const filterAppointments = (email, status) => axios.get(`${BASE_URL}/appointments/filter`, { params: { email, status } });
export const cancelAppointment = (id) => axios.put(`${BASE_URL}/appointments/cancel/${id}`);
