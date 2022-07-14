import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studio from "../component/studio/studio";
import Live from "../component/live";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Studio />} />
                <Route exact path="/live" element={<Live />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;