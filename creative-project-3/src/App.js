import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Project-Layout";
import Homepage from "./pages/Homepage";
import SearchCryptids from "./pages/Search-Cryptids";
import AboutMe from "./pages/About-Me";
import styles from'./App.css';
import App2 from "./App2";

export default function App() {
  return (
    <BrowserRouter basename='/Creative-Project-3/creative-project-3/build'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="search-Cryptids" element={<SearchCryptids />} />
          <Route path="App2" element={<App2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);