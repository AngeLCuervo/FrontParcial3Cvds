// Aquí va el componente AppointmentFormimport React, { useState } from "react";
import { scheduleAppointment } from "../services/api";
import { useParams } from "react-router-dom";

export default function AppointmentForm() {
    const { name } = useParams();
    const [form, setForm] = useState({ fullName: "", idNumber: "", email: "", date: "" });
    const [message, setMessage] = useState("");

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const appointment = {
                ...form,
                specialty: name,
                doctor: "Asignado automáticamente",
                location: "Sede Central"
            };
            const res = await scheduleAppointment(appointment);
            setMessage(`Cita ${res.data.status}`);
        } catch (err) {
            setMessage("Error al programar cita.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="fullName" placeholder="Nombre completo" onChange={handleChange} required />
            <input name="idNumber" placeholder="Cédula" onChange={handleChange} required />
            <input name="email" placeholder="Correo" onChange={handleChange} required />
            <input name="date" type="date" onChange={handleChange} required />
            <button>Confirmar Cita</button>
            <p>{message}</p>
        </form>
    );
}
