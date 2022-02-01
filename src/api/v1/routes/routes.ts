import express, {Request, Response, Router} from 'express';
const WidgetController = require('../controllers/WidgetController');

const router:Router = express.Router();

router.get('/api/v1/data', (req: Request, res: Response) => WidgetController.get(req, res));

export default router;