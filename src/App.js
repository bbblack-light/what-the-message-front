import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import YourComponent from "./ui/components/YourComponent";
import MainComponent from "./ui/components/MainComponent";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/new-path" element={<YourComponent />} />
                <Route path="/" element={<MainComponent />} />
            </Routes>
        </div>
    );
}

export default App;
