import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CenterDetail = () => {
    const [center, setCenter] = useState({})
    const { id } = useParams(); 

    useEffect(
        () => {
            const getCenter = async () => {
                const response = await fetch(`http://localhost:4000/api/centers/${id}`);
                const json = await response.json();
                setCenter(json.data);
            }
            getCenter();
        }, []
    )

    return (
        <div>
            <h2>{center.name}</h2>
            <p>Adresa:{center.address}</p>
            <p>Kapacita:{center.capacity} dětí</p>
            <p>Info:{center.info}</p>
            <p>Otevírací doba</p>
            {center.open ? (
                            Object.entries(center.open).map(([day, time]) => (
                            <div key={day}>
                                 <strong>{day}:</strong> {time || 'Zavřeno'}
                            </div>))) 
                         : (
<p>Otevírací doba není k dispozici.</p>
            )}
        </div>
    );
};

export default CenterDetail