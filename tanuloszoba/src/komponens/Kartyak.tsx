import { useState } from "react";
import Kartya from "./Kartya";
import Szuro from "./Szuro";
import { useElemKontextus } from "../kontext/kontextus";
import type { szobatipusok } from "../adatok/adatok";
//- Kartyak - ez tartalmazza az összes kártyát




export default function Kártyák() {
  const { lista } = useElemKontextus();
  const [kivalasztottTipus, setKivalasztottTipus] = useState<szobatipusok | "mind">("mind");
  // Csak olyan szoba jelenik meg, amelyben még van legalább egy szabad hely.
  const szurtLista = lista.filter((tanuloszoba) =>
    tanuloszoba.foglalt_helyek < tanuloszoba.ferohely
    && (kivalasztottTipus === "mind" || tanuloszoba.szobatipus === kivalasztottTipus),
  );

  return (
    <>
      <Szuro
        kivalasztottTipus={kivalasztottTipus}
        tipusValtozas={setKivalasztottTipus}
      />

      <div id="kartyak">
        {szurtLista.length > 0 ? szurtLista.map((tanuloszoba) => (
          <Kartya key={tanuloszoba.id} elem={tanuloszoba} />
        )) : <p className="ures-talalat">Nincs szabad hely a kiválasztott szobatípusban.</p>}
      </div>
    </>
  );
}
//programing with nosh