const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./config/swagger');
const scrapeRoutes = require('./routes/scraperRoutes');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', scrapeRoutes);

module.exports = app;