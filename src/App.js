import './App.css';
import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import Trayectoria from './Components/Trayectoria/Trayectoria';
import Projects from './Components/Projects/Projects';
import Card from "./Components/Cards/Card";
import Footer from './Components/Footer/Footer';

import cardData from "./data/cardData.json";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Trayectoria />
      <Projects />
      <Card cardData={cardData} />
      <Footer />
    </div>
  );
}

export default App;
