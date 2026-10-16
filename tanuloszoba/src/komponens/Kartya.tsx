import { TANULOSZOBAK } from "../adatok/adatok"

interface tanuloszoba {
    elem:TANULOSZOBAK,
    index:int

}



export default function Kartya(){
    return(
        <div>
            <h2>elem.szoba_nev</h2>
            <p>elem.szobatipus</p>
            <p>elem.emelet</p>
            <p>elem.ferohely</p>
            <p>elem.foglalt_helyek</p>
            
          </div>
    )

}