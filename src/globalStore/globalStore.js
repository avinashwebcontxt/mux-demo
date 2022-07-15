import actionTypes from "./constant/constant";

const initialData = {
    backgroundUrl: "",
    overlayUrl: "",
    pushBg: false,
    pushOverLay: false,
};

const Reducer = (state, { type, payload }) => {
    switch (type) {
        case actionTypes.BACKGROUND_URL:
            return ({
                ...state,
                backgroundUrl: payload
            });
        case actionTypes.OVERLAY_URL:
            return ({
                ...state,
                overlayUrl: payload
            });
        case actionTypes.PUSH_BG:
            return ({
                ...state,
                pushBg: payload
            });
        case actionTypes.PUSH_OVERLAY:
            return ({
                ...state,
                pushOverLay: payload
            });
        default:
            return state;
    }
};

export {
    initialData,
    Reducer
};