import type { szobatipusok } from "../adatok/adatok";

interface SzuroProps {
  kivalasztottTipus: szobatipusok | "mind";
  tipusValtozas: (tipus: szobatipusok | "mind") => void;
}

const szobatipusokLista: szobatipusok[] = [
  "egyéni tanulás",
  "csoportmunka",
  "számítógépes terem",
  "csendes olvasóterem",
];

export default function Szuro({ kivalasztottTipus, tipusValtozas }: SzuroProps) {
  return (
    <div className="szuro">
      <label htmlFor="szobatipus">Szűrés szobatípus szerint:</label>
      <select
        id="szobatipus"
        value={kivalasztottTipus}
        onChange={(esemeny) => tipusValtozas(esemeny.target.value as szobatipusok | "mind")}
      >
        <option value="mind">Minden szobatípus</option>
        {szobatipusokLista.map((tipus) => (
          <option key={tipus} value={tipus}>{tipus}</option>
        ))}
      </select>
    </div>
  );
}
