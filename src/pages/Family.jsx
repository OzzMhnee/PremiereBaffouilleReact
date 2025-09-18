import React from "react"
import Mom from "../components/MamanEnfant/Mom"

const Familly = () => {
    return (
        <div className="main-content"  style={{display:'flex', textAlign: 'center'}} >
            <h1>Histoires de famille</h1>
            <Mom />
        </div>
    );
}

export default Familly;