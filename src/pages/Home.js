import React from 'react'
import logo from "../pictures/zubar2.jpeg"
import logo1 from "../pictures/zubar3.png"
import logo2 from "../pictures/zubar4.jpg"



export default function Home() {
    return (
        <div className="container fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h4>O nama</h4>
                    <p className="p-3 mb-2 bg-gradient-primary text-muted">Stomatološka ordinacija Dentalux je osnovana jos 1992 godine u Novom Sadu pod imenom dr Vidovic,
                        vremenom smo se sirili i napravili Stomatoloski Centar Dentalux usklađen sa najnovijim kriterijumima CED (Council of European Dentists)
                        koji postavlja visoke standarde i uvode primenu najsavremenijih metoda u stomatologiji.
                        Praćenje svetskih trendova i stalno stručno usavršavanje su osnovne karakteristike koje ordinaciju izdvaja od drugih.
                    </p>

                    <p className="p-3 mb-2 bg-gradient-primary text-muted">Ukoliko želite za sebe najviše i tražite visokokvalitetnu stomatološku uslugu skrojenu prema Vašim ličnim zahtevima i željama,
                        ovo je pravo mesto za Vas. Mi nismo samo stomatolozi. Mi smo tim koji pažljivo sluša želje pacijenata i sigurno ih sprovodi do kraja tretmana.
                    </p>



                </div>
            </div>
            <div className="row">
                <div className="container">
                    <div className="title text-center">
                        <h1 className="text-uppercase my-5"></h1>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="image-fluid rounded-start" src={logo} width={250} alt=""></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Dr Radovan III</h3>
                                        <p className="card-text"> osnivac stomatoloskog centra Dentalux Batak.
                                            Zavrsio Stomatoloski fakultet u Novom Sadu 2010 godine sa prosecnom ocenom 9,5.
                                            Praksu nastavlja u Vojnoj bolnici u Novom Sadu 2011-2013.
                                            2013 godine preuzima stomatolosku ordinaciju Vidovic i uz mentora spec. oralne hururgije Dr Radomira Vidovica od 2013-2018 zajednickim snagama napreduje uz domace i inostrane edukacije
                                            2018 pravi stomatoloski centar Dentalux Batak. Posebno interesovanje za estetsku stomatologiju pokazu jos na pocetku karijere, kada u Becu zavrsava Ivoclar-ovu skolu za estetskog stomatologa. U Milanu zavrsava kurs Style Italiano.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="image-fluid rounded-start float-left" src={logo1} width={250} alt=""></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Dr Jelence Vilotic</h3>
                                        <p className="card-text">specijalista oralne hirurgije rođen u Šapcu 1989. godine gde završava osnovno obrazovanje i srednju Medicinsku školu „Dr Andra Jovanović” smer zubni tehničar. Medicinski fakultet u Novom Sadu, odsek stomatologija, završava 2013. godine, nakon čega obavlja obavezan pripravnički staž u Domu zdravlja Novi Sad. Od 2015. godine zaposlen u privatnoj stomatološkoj praksi. Specijalizaciju iz oralne hirurgije upisuje na Medicinskom fakultetu u Novom Sadu i istu završava 2020. godina, čime stiče zvanje specijaliste oralne hirurgije.
                                            U stomatološkoj ordinaciji Dentalux zaposlen od 2020. godine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="image-fluid rounded-start" src={logo2} width={250} alt=""></img>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h3>Dr Katica</h3>
                                        <p className="card-text">Diplomirala na Stomatološkom fakultetu u Beogradu 2007.
                                            Praksu započinje u DZ Novi Beograd, zatim se seli u Novi Sad gde radi privatnoj ordinaciji dr Bosnjak do 2020. kada postaje deo tima Dentaluxa.
                                            Njena interesovanja usmerena su na oblast konzervativne stomatologije i estetike i u tim oblastima se kontinuirano edukuje učestvujući na brojnim predavanjima.
                                            Slobodno vreme provodi sa porodicom i prijateljima,voli prirodu i putovanja.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}
