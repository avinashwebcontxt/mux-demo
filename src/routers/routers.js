import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../component/welcome";
import Host from "../component/host/host";
import Speaker from "../component/speaker/speaker";
import Attendee from "../component/attendee/attendee";

const Routers = () => {

    const routerArr = [
        { path: "", Element: Welcome },
        { path: "host", Element: Host },
        { path: "speaker", Element: Speaker },
        { path: "attendee", Element: Attendee },
    ];

    const { NODE_ENV,BASENAME } = process.env;
    
    return (
        <BrowserRouter basename={NODE_ENV === "development" ? "" : BASENAME}>
            <Routes>
                {routerArr.map(({ path, Element }) => {
                    return (
                        <Route key={path} exact path={path} element={<Element />} />
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;