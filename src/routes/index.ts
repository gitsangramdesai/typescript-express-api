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

router.get('/sample', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root page"
  })

});

router.get('/test', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root page"
  })

});

router.get('/final', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root final"
  })

});

router.get('/sangram', function (_req, res, _next) {
  res.json({
    "success":true,
    "msg":"successfully loaded root final"
  })

});
export default router;
