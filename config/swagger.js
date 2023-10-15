const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
definition:{
    openapi: '3.0.0',
    info:{
        title: 'Aplicacion de Scraping',
        version: '1.0.5',
        descripcion: 'Una api simple de scraping para mostrar mis conocimientos utilizando swagger, axios, cheerio todo en NodeJs',
   },
},
    apis: ['routes\scraperRoutes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports=swaggerDocs;