import { HttpClient, LoggingService } from '../services/index';

class BaseController {
    _logger;
    _httpClient;
    constructor() {
        this._logger = new LoggingService();
        this._httpClient = new HttpClient();
    }
}

module.exports = BaseController;
