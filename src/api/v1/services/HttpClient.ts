import axios, { AxiosRequestConfig } from 'axios';

export default class HttpClient {
    async get(url: string) {
        const config: AxiosRequestConfig = {
            // responseType: 'stream',
            headers: {
                'Accept': 'application/json',
                'content-Type': 'application/json',
            }
        };

        try {
            return await axios.get(url, config);
        } catch (error) {
            return error;
        }
    }
}