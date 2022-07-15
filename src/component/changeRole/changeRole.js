import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function ChangeRole() {

    return (
        <Fragment>
            <div className="welcome-as">
                <ul>
                    <li><Link to={"/"}>Change Role</Link></li>
                </ul>
            </div>
        </Fragment>
    );
}