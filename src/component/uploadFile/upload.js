import { Fragment, useContext, useState } from "react";
import "../../css/style.css";
import Context from "../../context/context";


export default function Upload() {

    const { layOut, setLayOut } = useContext(Context);

    console.log(layOut, "@@@@@@@@@@@@")

    const changeBackgroundUrl = () => {
        setLayOut({
            ...layOut,
            pushBg: true
        });
    }

    const changeOverlayUrl = () => {
        setLayOut({
            ...layOut,
            pushOverLay: true
        });
    }

    return (
        <Fragment>
            <div id="upload-section">
                <input type="text" name="backgroundUrl" value={layOut.backgroundUrl} onChange={(e) => {
                    setLayOut({
                        ...layOut,
                        backgroundUrl: e.target.value,
                        pushBg: false
                    });
                }} />
                <button onClick={() => { changeBackgroundUrl() }}>Change Background</button>

                <input type="text" name="overlayUrl" value={layOut.overlayUrl} onChange={(e) => {
                    setLayOut({
                        ...layOut,
                        overlayUrl: e.target.value,
                        pushOverLay: false
                    });
                }} />
                <button onClick={() => { changeOverlayUrl() }}>Change Overlay</button>
            </div>
        </Fragment>
    );
}