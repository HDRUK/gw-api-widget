import {Response, Request} from 'express';
import url from 'url';
const BaseController = require('./BaseController');

class WidgetController extends BaseController {
    constructor() {
        super();
    }

    async get(req: Request, res: Response) {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const inputQuery = url.parse(fullUrl).query;
        const urlPath = `${process.env.SOURCE_URL}?${inputQuery}`;

        this._logger.sendDataInLogging(
            {
                inputUrl: fullUrl,
                gatewayUrl: urlPath,
            },
            'INFO',
        );

        const response = await this._httpClient.get(urlPath);

        if (JSON.stringify(response.data) === undefined) {
            this._logger.sendDataInLogging(
                {
                    errorMessage: `${response.message || response}`,
                },
                'ERROR',
            );

            res.status(500).json({
                message: `Invalid Data - ${response.message || response}`,
            });
        }

        res.status(200).json(JSON.parse(JSON.stringify(response.data)));
    }
}

module.exports = new WidgetController();