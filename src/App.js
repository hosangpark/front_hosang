import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Projects2 } from "./components/Projects2";
import { History } from "./components/History";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Projects2 />
      <History />
      <Contact />
    </div>
  );
}

export default App;
