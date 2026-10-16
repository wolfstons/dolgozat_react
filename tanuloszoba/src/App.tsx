import type { TanuloszobaTipus } from "./adatok/adatok";
import "./App.css";
import Kartyak from "./komponens/Kartyak";
import { ElemKontextusProvider } from "./kontext/elemkontext";



export interface Tanuloszoba {
  index: number,
  elem:TanuloszobaTipus[]
} 




function App() {
  return (
    <ElemKontextusProvider>
      <main>
        <header>
          <h1>tanuloszobák neked csak most csak ma</h1>
        </header>
        <section>
          <Kartyak />
        </section>
      </main>
    </ElemKontextusProvider>
  );
}

export default App;
