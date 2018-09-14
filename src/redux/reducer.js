import constants from './constants';

const initialState = {
    isFetching: false,
    worldCupData: [],
};

const WorldCupDataReducer = (state=initialState, action) => {
    switch (action.type) {
        case constants.START_FETCHING_DATA:
            return {isFetching : action.isFetching, ...state};
            break;
        case constants.END_FETCHING_DATA:
            return {
                isFetching: action.isFetching,
                worldCupData: action.worldCupData
            };
            break;
        default:
            return state;
    }
}

export default WorldCupDataReducer;
