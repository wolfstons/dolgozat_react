import type { TanuloszobaTipus } from "./adatok/adatok";
import "./App.css";
import Kartyak from "./komponens/Kartyak";



export interface Tanuloszoba {
  index: number,
  elem:TanuloszobaTipus[]
} 




function App() {
  return (
    <>
      <main>
        <header>
          <h1>tanuloszobák neked csak most csak ma</h1>
        </header>
        <section>
          <Kartyak elem={undefined} index={undefined}/>
        </section>
      </main>
    </>
  );
}

export default App;
