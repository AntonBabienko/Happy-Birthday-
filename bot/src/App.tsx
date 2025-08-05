import { MyEpitets } from './Data.ts'
import Header from './components/Header'
import Epithets from './components/Epithets'
import './App.css'
import { use, useId, useState, useEffect } from 'react';


function App() {

  const [randomEpithets, setRandomEpithet] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomEpithet: number = Math.floor(Math.random() * MyEpitets.length);
      setRandomEpithet(randomEpithet);

    }, 3000);
    return () => clearInterval(intervalId);
  }, []);



  return (
    <div>
      <Header />

      <main>
        <section>

          <h3>Happy Birthday,<Epithets title={MyEpitets[randomEpithets]} />!</h3>

        </section>

      </main>

    </div>
  )
}

export default App
