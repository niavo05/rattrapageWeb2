import { useEffect, useState } from 'react';
import axios from "axios";
import "./style.css"

function App() {

    const [list, setList] = useState([])
    useEffect(() => {
        fetch('api.json')
        .then(response => response.json())
        .then(data => setList(data.list))
    },[]);

    function listApartments() {
        return list.map((e) => {
            return(
                <>
                    <h1>{e.id}</h1>
                    <p>{e.description}</p>
                    <p>{e.price}</p>
                    <img src="{e.picture}" alt="" />
                </>
            )

        })
    }
    return (<listApartments/>)
    // return (
    //     <div className="filtrage">
    //         <form>
    //             <input type="text" className="demande"/>
    //             <input type="button" value="search" className="boutton"/>
    //         </form>
    //         <section className="liste">

    //         </section>
    //     </div>
    // )
}

export default App
