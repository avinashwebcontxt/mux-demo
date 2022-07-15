import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Host() {

    return (
        <Fragment>
            <div className="welcome-index">
                <div className="welcome-page">
                    <div className="welcome-text">
                        <strong>Welcome To Mux Studio Demo</strong>
                    </div>
                    
                    <div className="welcome-as">
                        <strong>Please Join As : </strong>
                        <ul>
                            <li><Link to={"/host"}>Host</Link></li>
                            <li><Link to={"/speaker"}>Speaker</Link></li>
                            <li><Link to={"/attendee"}>Attendee</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}