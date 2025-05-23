import React, { useEffect, useState } from "react";
import { getSpecialties } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [specialties, setSpecialties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getSpecialties().then(res => setSpecialties(res.data));
    }, []);

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {specialties.map(s => (
                <div key={s.name} onClick={() => navigate(`/specialty/${s.name}`)} style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px" }}>
                    <img src={s.imageUrl} alt={s.name} style={{ width: "100%" }} />
                    <h3>{s.name}</h3>
                </div>
            ))}
        </div>
    );
}
