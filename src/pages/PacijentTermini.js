
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function PacijentTermini() {


  const pdt = localStorage.getItem("podatak")
  const podatak = JSON.parse(pdt)
  console.log(podatak + "ovo je log")
  const [termini, setTermini] = useState([])


  const { idTermina } = useParams()

  useEffect(() => {
    loadTermini()
  }, [])


  const loadTermini = async () => { 
    const result = await axios.get("http://localhost:8080/terminiPacijenta?podatak="+podatak)

    setTermini(result.data)
    
    
    
  }

  const otkaziTermin=async (idTermina)=>{
    const result=await axios.post("http://localhost:8080/pacijentObrisi",{idT:idTermina})
    if(result.data == false){
      alert("Nemoguce je otkazati termin zato sto je ostalo manje od 24h do termina")
    }
    loadTermini();

  }


  return (





    <div className="container">
      <div className="py-4">
        
        <table className="table border shadow">
          <thead>
            <tr>


              <th scope="col">Datum i vreme</th>
              <th scope="col">Trajanje termina</th>
              <th scope="col">Tip pregleda</th>
            </tr>
          </thead>
          <tbody>
            {
              termini.map((termin, index) => (
                <tr>



                  <td>{termin.vremeTermina}</td>
                  <td>{termin.trajanjeTermina}</td>
                  <td>{termin.tipPregleda}</td>
                  <td>
                  <button className="btn btn-danger mx-2" onClick={()=>otkaziTermin(termin.idTermina) }>Otkazi Termin</button>

                   
                  </td>
                </tr>

              ))
            }




          </tbody>
        </table>
        


      </div>


    </div>
  )
}
