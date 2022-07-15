import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../component/welcome";
import Host from "../component/host/host";
import Speaker from "../component/speaker/speaker";
import Attendee from "../component/attendee/attendee";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Welcome />} />
                <Route exact path="/host" element={<Host />} />
                <Route exact path="/speaker" element={<Speaker />} />
                <Route exact path="/attendee" element={<Attendee />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;