
import Layout from './components/Layout'
import './App.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  //https://bobangajicsm.github.io/portfolio/index.html
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout />}/>
   </Routes>
   </>
  )
}

export default App;
