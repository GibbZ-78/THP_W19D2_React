import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
