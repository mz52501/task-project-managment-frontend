import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {MyNavbar} from "./pages/MyNavbar";
import LandingPage from "./pages/LandingPage";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import KanbanBoard from "./components/KanbanBoard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<Landing/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/" element={<MyNavbar/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/demo" element={<KanbanBoard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
