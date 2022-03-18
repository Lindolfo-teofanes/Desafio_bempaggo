import { render } from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from './App';
import Checkout from './pages/checkout';

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/compra' exact element={<Checkout />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
);

