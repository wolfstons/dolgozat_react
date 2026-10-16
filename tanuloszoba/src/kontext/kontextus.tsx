import { createContext, useContext } from "react";
import type { TanuloszobaTipus } from "../adatok/adatok";

export interface TanuloszobaKontextusTipus {
  lista: TanuloszobaTipus[];
  aktivalt: TanuloszobaTipus | null;
  foglalas: (szoba: TanuloszobaTipus) => void;
  setAktivalt: (szoba: TanuloszobaTipus | null) => void;
}

export const ElemKontextus = createContext<TanuloszobaKontextusTipus | undefined>(undefined);

// Saját hookkal egy helyen kezeljük azt az esetet, ha a komponenst provider nélkül használják.
export function useElemKontextus() {
  const kontextus = useContext(ElemKontextus);
  if (!kontextus) {
    throw new Error("A useElemKontextus csak ElemKontextusProvider alatt használható.");
  }
  return kontextus;
}
