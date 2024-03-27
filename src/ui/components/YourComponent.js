import { useNavigate } from "react-router-dom";

export default function YourComponent()  {
    const navigate = useNavigate()
    return (
        <>
            <div className="App">
                my component
                <button
                    onClick={
                        () => navigate("/")
                    }
                >return back</button>
            </div>
        </>

    );
}