import './App.css';
import {Routes, Route} from 'react-router';
import Home from './screens/Home';
import Bio from './screens/Bio';
import Links from './screens/Links';
import Header from './components/Header';

function App() {
  return (
    <div className="obsidianSkies">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
