import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function () {

    const [podatak, setPodatak] = useState("")
    useEffect(() => {
        localStorage.setItem("podatak", JSON.stringify(podatak))
    })

    let navigate = useNavigate()

    const onInputChange = (e) => {
        setPodatak(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
    }




    return (
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow col-xs-2">
            <h3 className="text-muted">Identifikacija</h3>
            <form>
                <div className="mb-3 ">
                    <label htmlFor="ime" className="form-label text-secondary">

                    </label>
                    <p className="text-muted">Unesite email adresu koja je koriscena
                        prilikom zakazivanja termina.</p>
                    <input
                        type={"text"}
                        className="form-control input-group-sm "
                        placeholder="Unesite email ili broj telefona"
                        name="podatak"
                        value={podatak}
                        onChange={(e) => onInputChange(e)}



                    />





                </div>
                <button type="submit" className="btn btn-secondary">Identifikacija</button>
            </form>




        </div>
    )
}
