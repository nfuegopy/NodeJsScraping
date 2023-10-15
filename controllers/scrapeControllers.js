const scraperService = require('../services/scraperService');

const scrape = async (req, res) => {
    try {
        const data = await scraperService.scrapeWebsite();
        res.json(data);
    }catch(error){
        console.error(error);
        res.status(500).send('Error de Servidor');
    }
};

module.exports={
    scrape,
};