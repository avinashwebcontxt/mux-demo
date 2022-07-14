import { Fragment, useContext } from "react";
import "../../css/style.css";
import actionTypes from "../../globalStore/constant/constant";
import Context from "../../context/context";
import { isValidUrl } from "../../utility/utility";

export default function Upload() {

    const { storeData, dispatch } = useContext(Context);

    console.log(storeData, "@@@@@@@@@@@@");

    const changeBackgroundUrl = () => {
        dispatch({ type: actionTypes.PUSH_BG, payload: true });
    }

    const changeOverlayUrl = () => {
        dispatch({ type: actionTypes.PUSH_OVERLAY, payload: true });
    }

    return (
        <Fragment>
            <div id="upload-section">
                <div>
                    <input type="text" name="backgroundUrl" value={storeData.backgroundUrl} onChange={(e) => {
                        dispatch({ type: actionTypes.BACKGROUND_URL, payload: e.target.value });
                        dispatch({ type: actionTypes.PUSH_BG, payload: false });

                    }} />
                    <button onClick={() => {
                        if (storeData && storeData.backgroundUrl) {
                            if(isValidUrl(storeData.backgroundUrl)){
                                changeBackgroundUrl()
                            }
                        }
                    }}>Change Background</button>
                </div>
                <div>

                    <input type="text" name="overlayUrl" value={storeData.overlayUrl} onChange={(e) => {
                        dispatch({ type: actionTypes.OVERLAY_URL, payload: e.target.value });
                        dispatch({ type: actionTypes.PUSH_OVERLAY, payload: false });
                    }} />
                    <button onClick={() => {
                        if (storeData && storeData.overlayUrl) {
                            if(isValidUrl(storeData.overlayUrl)){
                                changeOverlayUrl();
                            }
                        }
                    }}>Change Overlay</button>
                </div>

            </div>
        </Fragment>
    );
}