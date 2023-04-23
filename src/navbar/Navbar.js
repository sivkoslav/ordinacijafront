import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <h1 className="navbar-brand" >Zubarska Ordinacija</h1>
                <Link className="btn btn-outline-dark " to={"/Identifikacija"}>Identifikacija</Link>









            </nav>
        </div>
    )
}
