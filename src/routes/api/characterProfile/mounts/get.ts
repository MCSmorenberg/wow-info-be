import getMounts from '../../../../modules/mounts/getMounts';

const mountsGet = async<T>(url, params) => {;
    try {
        const mounts: any = await getMounts(url, params);

        console.log('yyyyyyeeeeeeaaaahhhhhhhhhhh', mounts);
        return mounts
    } catch (error) {

        throw new Error(error);;
    }
};

export default mountsGet;

