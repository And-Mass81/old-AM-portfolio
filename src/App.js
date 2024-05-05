import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
