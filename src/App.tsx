import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AddressBook from './components/AddressBook';
import DetailsPage from './components/DetailsPage';
import { useContext } from "react";
import { UserContext } from "./contextApi/UserContext";
import { Link } from 'react-router-dom';

function App() {
  const { user, setData } = useContext(UserContext);
  return (
    <div className="App">
      <BrowserRouter>
      <h1 style={{fontFamily:"Impact"}}><Link to="/">ADDRESS BOOK</Link></h1>

      <Routes>
        <Route path="/" element={<AddressBook/>} />
        <Route path="/details/:name" element={<DetailsPage userInfo={user}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
