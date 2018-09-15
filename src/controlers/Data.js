import axios from 'axios';

const url = 'http://worldcup.sfg.io/matches';

export const getWorldCupData = async () => {
    try{
        const axiosPromise = await axios.get(url, {headers: {'Access-Control-Allow-Origin': '*'}});
        return await axiosPromise;
    }
    catch (error) {
        console.log(error);
    }
};
