import * as CONST from '../constants/index';

const UIreducer = (state = { theme: 'lightmode' }, action) => {
    switch (action.type) {
        case CONST.SET_LIGHT_MODE:
            localStorage.setItem('theme', 'lightmode');
            return { theme: 'lightmode' };

        case CONST.SET_DARK_MODE:
            localStorage.setItem('theme', 'darkmode');
            return { theme: 'darkmode' };

        default:
            return state;
    }
};

export default UIreducer;