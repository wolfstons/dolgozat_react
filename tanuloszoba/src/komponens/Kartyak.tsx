import { useState } from "react";
import { TANULOSZOBAK } from "../adatok/adatok";
import Kartya from "./Kartya";
//- Kartyak - ez tartalmazza az összes kártyát




export default function Kártyák() {
    const[novel,ertekHivatkozas]=useState()


  return (
    <div id="kartyak">
      {TANULOSZOBAK.map((tanuloszoba) => (
        <Kartya key={tanuloszoba.id} elem={tanuloszoba} />
      ))}
    </div>
  );
}
//programing with nosh