import './App.css';
import {Routes, Route} from 'react-router';
import Home from './screens/Home';
import Bio from './screens/Bio';
import Links from './screens/Links';
import Contact from './screens/Contact';
import Music from './screens/Music';
import Header from './components/Header';

function App() {
  return (
    <div className="obsidianSkies">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </div>
  );
}

export default App;
