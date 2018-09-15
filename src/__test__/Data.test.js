import mockAxios from 'axios';
import { getWorldCupData } from '../controlers/Data';

describe('Data', () => {
    it('should get data from the worldcup API', async () => {

        const url = "http://worldcup.sfg.io/matches";

        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: [{venue:'Moscow'}]
            })
        );

        const matches = await getWorldCupData();

        expect(matches).toEqual({data: [{venue:'Moscow'}]});
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(url, {headers: {'Access-Control-Allow-Origin': '*'}});
    });
});



