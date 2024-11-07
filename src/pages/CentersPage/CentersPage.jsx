import { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"

const CentersPage = () => {
    const [center, setCenter] = useState([])

    // api ze souboru http://localhost:4000
    useEffect(() => {
        const getData = async () => {
            const response = await fetch("http://localhost:4000/api/centers")
            const result = await response.json()
            setCenter(result.data)
        }
        getData()
    }, [])

    return(
        <div className="container">
            <h2 className="nadpis">Kde nás najdete</h2>
            <ul>
                {center.map(item => (
                    <li key={item.id}>
                        <nav>
                            <NavLink to={`/pobocky/${item.id}`}>
                                        <h3>{item.name}</h3>                               
                             </NavLink> 
                        </nav>
                            <Outlet />
                    </li>
                ))}
            </ul>
           
        </div>
    )
}
export default CentersPage

