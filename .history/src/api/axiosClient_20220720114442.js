import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseUrl: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params,api_Key:apiConfig.apiKey}),
})

axiosClient.interceptors.request.use(async (config) => config);

axios.interceptors.response.use( (response) => {
    if(response && response.data){
        return response.data
    }
    return response;
},(error) => {
    throw error;
});

export default axiosClient;