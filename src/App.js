import './App.css';
import Home from './pages/home/Home'
import {Routes, Route} from "react-router-dom"
import ProfilePage from './pages/profilePage/ProfilePage';
import SearchPage from './pages/seachPage/SearchPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/search" element={<SearchPage />}/>
    </Routes>
    </>
  );
}

export default App;
