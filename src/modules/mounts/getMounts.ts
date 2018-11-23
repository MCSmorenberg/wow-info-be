import config from 'config';
import axios from 'axios';

const mountsGet = async<T>() => {
    const apiKey = config.get('blizzard.apiKey');
    const uri = 'https://eu.api.battle.net/wow/character/Executus/Maxiima?fields=mounts&locale=en_GB&apikey=' + apiKey;

//     const request = require("request");

//     const options = {
//         method: 'GET',
//         url: 'https://eu.api.battle.net/wow/character/Executus/Maxiima',
//         qs:
//         {
//             fields: 'mounts',
//             locale: 'en_GB',
//             apikey: apiKey
//         },
//         headers:
//         {
//             'Postman-Token': '130d5f97-8783-4450-ada3-b684394d3e21',
//             'cache-control': 'no-cache',
//             'Content-Type': 'application/json'
//         }
//     };

//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);

//         console.log(body);
//         return body;
//     });

//     return await request.body;

// };

    try {
        const response = await axios.get(uri);
        const data = response.data;

        return data;
    } catch (error) {
        console.log(error);
        throw new Error();
    }
};

export default mountsGet;
