import { TANULOSZOBAK } from "../adatok/adatok";
import Kartya from "./Kartya";
//- Kartyak - ez tartalmazza az összes kártyát




export default function Kártyák() {
  return (
    <div id="kartyak">
      {TANULOSZOBAK.map((tanuloszoba) => (
        <Kartya key={tanuloszoba.id} elem={tanuloszoba} />
      ))}
    </div>
  );
}
