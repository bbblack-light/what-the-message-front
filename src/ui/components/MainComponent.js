import { useNavigate } from "react-router-dom";

export default function MainComponent()  {
    const navigate = useNavigate()
    return (
        <div className="App">
            my first app
            <button
                onClick={
                    () => navigate("/new-path")
                }
            >click me</button>
        </div>
    );
}