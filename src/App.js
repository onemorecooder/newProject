import "./App.css";
import Header from "./Components/Header/Header";
import Welcome from "./Components/Welcome/Welcome";
import Trayectoria from "./Components/Trayectoria/Trayectoria";
import Projects from "./Components/Projects/Projects";

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Trayectoria />
      <Projects />

      <Footer />
    </div>
  );
}

export default App;
