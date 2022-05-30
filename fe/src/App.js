import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductCard from './component/ProductCard';
import Login from './component/Login';
import Register from './component/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/productcard" element={ <ProductCard />}> </Route>
          <Route path="/login" element={ <Login/> }> </Route>
          <Route path="/register" element={ <Register /> }> </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
