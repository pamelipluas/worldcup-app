import constants from './constants';
import {getWorldCupData} from "../models/Data";

export const startFetchingData = () => {
    return {
        type: constants.START_FETCHING_DATA,
        worldCupData: [],
        isFetching: true,
    }
};

export const endFetchingData = (worldCupData) => {
    return {
        type: constants.END_FETCHING_DATA,
        worldCupData: worldCupData,
        isFetching: false,
    }
};

export const fetchWorldCupData = () => {
    return (dispatch) => {
        dispatch(startFetchingData());
        return getWorldCupData().then(
            (response) => {
                dispatch(endFetchingData(response.data))
            },
            (err) => {
                console.log(err);
            }
        )
    }
};