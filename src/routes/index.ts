import express from 'express';
import { getLogger } from '../utils/loggers';
const router = express.Router();
const logger = getLogger('INDEX_ROUTE');

/* GET home page. */
router.get('/', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root page"
  })

});


router.get('/demo', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root page"
  })

});
export default router;
