import React from 'react'
import { Link } from 'react-router-dom'


export default function MiniNavbar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary py-0">

                <div className="container">
                    <a className="navbar-brand text mb-1">Zubarska ordinacija</a>





                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Pocetna</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/Zakazivanje"}>Zakazi</Link>
                            </li>
                            <li className='"nav-item'>
                                <Link className="nav-link" to={"/Cenovnik"}>Cenovnik</Link>
                            </li>

                        </ul>

                       



                    </div>

                </div>

            </nav>

        </div>
    )
}
