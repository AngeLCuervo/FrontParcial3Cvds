import React, { useEffect, useState } from "react";
import { getSpecialty } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

export default function SpecialtyDetail() {
    const { name } = useParams();
    const [specialty, setSpecialty] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getSpecialty(name).then(res => setSpecialty(res.data));
    }, [name]);

    if (!specialty) return <p>Cargando...</p>;

    return (
        <div>
            <img src={specialty.imageUrl} alt={specialty.name} style={{ width: "100%" }} />
            <h2>{specialty.name}</h2>
            <p>{specialty.description}</p>
            <p><strong>Doctor:</strong> {specialty.doctor}</p>
            <p><strong>Ubicación:</strong> {specialty.location}</p>
            <button onClick={() => navigate(`/appointment/${name}`)}>Programar Cita</button>
        </div>
    );
}
