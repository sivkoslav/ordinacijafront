import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'


export default function Zakazivanje() {

  const [datum, setDatum] = useState()

  const [pacijent, setPacijent] = useState({
    ime: "",
    email: "",
    telefon: ""
  })

  const { ime, email, telefon } = pacijent
  const [departman, setDepartman] = useState()

  const onDepartmanChange = (e) => {
    setDepartman(e)
  }

  const onInputChange = (e) => {
    setPacijent({ ...pacijent, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(pacijent, datum, departman)
    try {
      const result = await axios.post("http://localhost:8080/termin", { ime: pacijent.ime, brojtelefona: pacijent.telefon, email: pacijent.email, datum: datum, departman: departman })
      console.log(result.data)
      if(result.data===true){
        console.log("true je stiglo")
        swal({
          title: "Zakazan",
          text: "Uspesno ste zakazali termin, vise informacija ce vam stici na email.",
          icon: "success",
          button: "kraj"
        })
      }if(result.data===false){
        swal({
          title: "Greska",
          text: "Svi termini za danasnji datum su popunjeni pokusajte drugi dan",
          icon: "error",
          button: "kraj"
        })
      }
    } catch (err) {
      console.log(err)
    }
    setPacijent({
      ime:"",
      email: "",
      telefon: ""
    })


  }


  return (
    <div className="container fluid">

      <div className="row pt-2">
        <div className="card mb-3 pt-2">
          <div className="row g-0">
            <div className="col-md-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.4568335436434!2d19.835951576757875!3d45.238554148465276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b101a0d9193ad%3A0x6b4483a92686a7f6!2s%C5%A0ekspirova%2026%2C%20Novi%20Sad%2021000!5e0!3m2!1sen!2srs!4v1682341976925!5m2!1sen!2srs"
                width="600" height="450" style={{ border: "0" }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-title">
                  <h1 className="text-secondary">Kontakt</h1><br></br>
                  <h3 className="text-secondary">Adresa:</h3><br></br>
                  <p>Sekspirova 26 Novi Sad 21000</p>
                  <h3 className="text-secondary">Telefon:</h3><br></br>
                  <p>021 999 9999</p>
                  <h3 className="text-secondary">Email:</h3><br></br>
                  <p>ordinacija@gmail.com</p>


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h3 className="text-center m-4 text-secondary">Zakazivanje termina</h3>
          <form onSubmit={(e) => onSubmit(e)}>

            <div className="mb-3">
              <label htmlFor="ime" className="form-label text-secondary">
                Ime
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="ime i prezime"
                name="ime"
                value={ime}
                onChange={(e) => onInputChange(e)}


              />





            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary" >
                Email
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Vas Email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}

              />



            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary">
                Telefon
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Vas Telefon"
                name="telefon"
                value={telefon}
                onChange={(e) => onInputChange(e)}

              />



            </div>
            <div className="mb-3">
              <label htmlFor="trajanje" className="form-label text-secondary">
                Izaberite departman
              </label>
              <select className="form-control"
                name="departman" onChange={e => onDepartmanChange(e.target.value)}>
                <option value="">--izaberite departman--</option>
                <option value="Snimanje (RTG)" >Snimanje (RTG)</option>
                <option value="Protetika">Protetika</option>
                <option value="Oralna hirurgija">Oralna hirurgija</option>
                <option value="Paradontologija">Paradontologija</option>
                <option value="Decija stomatologija">Decija stomatologija</option>
                <option value="Endodoncija">Endodoncija</option>
                <option value="Estetska stomatologija">Estetska stomatologija</option>
                <option value="Mezoterapija">Mezoterapija</option>
                <option value="Ortodoncija">Ortodoncija</option>


              </select>

              <div className="mb-3">
                <label htmlFor="date" className="form-label text-secondary">
                  Datum
                </label>
                <input
                  type={"date"}
                  className="form-control"
                  onChange={e => setDatum(e.target.value)}

                  name="date"

                />



              </div>



            </div>
            <button type="submit" className="btn btn-outline-secondary">Zakazi</button>
          </form>

        </div>
      </div>

    </div>
  )
}
