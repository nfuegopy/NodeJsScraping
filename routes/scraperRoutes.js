const express = require('express');
const scrapeControllers = require('../controllers/scrapeControllers');

const router = express.Router();

/**
 * @swagger
 * /api/scrape:
 *   get:
 *     summary: Realiza web scraping a una página de ejemplo
 *     responses:
 *       200:
 *         description: Datos extraídos exitosamente
 */
router.get('/scrape', scrapeControllers.scrape);

module.exports = router;