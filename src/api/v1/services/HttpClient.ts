import axios, { AxiosRequestConfig } from 'axios';

export default class HttpClient {
    async get(url: string) {
        const config: AxiosRequestConfig = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.get(url, config);
            return response;
        } catch (error) {
            return error;
        }
    }
}