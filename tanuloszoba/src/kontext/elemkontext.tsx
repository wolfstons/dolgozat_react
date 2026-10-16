import { useState, type ReactNode } from "react";
import { TANULOSZOBAK, type TanuloszobaTipus } from "../adatok/adatok";
import { ElemKontextus } from "./kontextus";

interface ElemKontextusProviderProps {
  children: ReactNode;
}

export function ElemKontextusProvider({ children }: ElemKontextusProviderProps) {
  const [lista, setLista] = useState<TanuloszobaTipus[]>(TANULOSZOBAK);
  const [aktivalt, setAktivalt] = useState<TanuloszobaTipus | null>(null);

  // A foglalás itt módosítja a közös listát, ezért minden kártya ugyanazt az állapotot látja.
  function foglalas(szoba: TanuloszobaTipus) {
    setLista((aktualisLista) => aktualisLista.flatMap((aktualisSzoba) => {
      if (aktualisSzoba.id !== szoba.id) {
        return [aktualisSzoba];
      }

      const frissitettSzoba = {
        ...aktualisSzoba,
        foglalt_helyek: aktualisSzoba.foglalt_helyek + 1,
      };

      // Ha az utolsó helyet is lefoglalják, a szoba kikerül a megjelenített listából.
      return frissitettSzoba.foglalt_helyek >= frissitettSzoba.ferohely
        ? []
        : [frissitettSzoba];
    }));
    setAktivalt(szoba);
  }

  return (
    <ElemKontextus.Provider value={{ lista, aktivalt, foglalas, setAktivalt }}>
      {children}
    </ElemKontextus.Provider>
  );
}
