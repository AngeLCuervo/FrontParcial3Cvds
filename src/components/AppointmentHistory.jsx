import { getAppointments, filterAppointments, cancelAppointment } from "../services/api";

export default function AppointmentHistory() {
    const [email, setEmail] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [filter, setFilter] = useState("");

    const fetchAppointments = () => {
        if (filter) {
            filterAppointments(email, filter).then(res => setAppointments(res.data));
        } else {
            getAppointments(email).then(res => setAppointments(res.data));
        }
    };

    const handleCancel = (id) => {
        cancelAppointment(id).then(fetchAppointments);
    };

    return (
        <div>
            <input value={email} placeholder="Correo" onChange={e => setEmail(e.target.value)} />
            <button onClick={fetchAppointments}>Buscar</button>
            <select onChange={e => setFilter(e.target.value)}>
                <option value="">Todos</option>
                <option value="Confirmada">Confirmada</option>
                <option value="Cancelada">Cancelada</option>
            </select>
            <div>
                {appointments.map(a => (
                    <div key={a.id} style={{ border: "1px solid", margin: "5px", padding: "10px", background: a.status === "Cancelada" ? "#faa" : "#afa" }}>
                        <p><strong>Especialidad:</strong> {a.specialty}</p>
                        <p><strong>Fecha:</strong> {a.date}</p>
                        <p><strong>Estado:</strong> {a.status}</p>
                        {a.status === "Confirmada" && <button onClick={() => handleCancel(a.id)}>Cancelar</button>}
                    </div>
                ))}
            </div>
        </div>
    );
}
