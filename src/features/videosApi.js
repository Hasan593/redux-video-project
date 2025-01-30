import axios from "../../utils/axios";


export const getVideos = async () => {
    const respose = await axios.get('/videos');
    return respose.data;
};