import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navbar/><Dashboard/><Footer/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
