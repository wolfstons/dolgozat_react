import { TANULOSZOBAK } from "../adatok/adatok"

interface tanuloszoba {
    elem:TANULOSZOBAK,
    index:int

}
//- Kartya - Egy darab kártya megjelenítése. Itt röténik a kattintás az esemény



export default function Kartya(elem,index:tanuloszoba){
    return(
        <>
        <div>
            <h2>elem.szoba_nev</h2>
            <p>elem.szobatipus</p>
            <p>elem.emelet</p>
            <p>elem.ferohely</p>
            <p>elem.foglalt_helyek</p>
            <button onClick={() => {}}>helyet foglalok</button>
          </div>
          </>
    )

}