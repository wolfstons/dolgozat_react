import type { TanuloszobaTipus } from "../adatok/adatok"

interface KartyaProps {
    elem: TanuloszobaTipus;
}
//- Kartya - Egy darab kártya megjelenítése. Itt röténik a kattintás az esemény



export default function Kartya({ elem }: KartyaProps) {
    return(
        <article>
            <h2>{elem.szoba_nev}</h2>
            <p>Típus: {elem.szobatipus}</p>
            <p>Emelet: {elem.emelet}.</p>
            <p>Férőhelyek: {elem.ferohely}</p>
            <p>Foglalt helyek: {elem.foglalt_helyek}</p>
            <button onClick={() => {}}>helyet foglalok</button>
        </article>
        
    )

}