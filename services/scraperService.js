const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsite = async () => {
    try {
        let page = 1;
        let hasNextPage = true;
        const allQuotes = [];

        while (hasNextPage) {
            const response = await axios.get(`https://quotes.toscrape.com/page/${page}/`);
            const $ = cheerio.load(response.data);

            // Seleccionar todos los elementos 'div' con la clase 'quote'
            const quotesElements = $('div.quote');
            const quotes = quotesElements.map((index, element) => {
                const $element = $(element);
                return {
                    text: $element.find('span.text').text(), //define el texto en el json
                    author: $element.find('span small').text(), //Define el actor en el Json
                };
            }).get();

            allQuotes.push(...quotes);  // Agregar las citas de la página actual a allQuotes

            // Verificar si existe el botón "Next" para poder filtrar todas las paginas
            hasNextPage = $('li.next').length > 0;
            page++;
        }

        console.log(allQuotes);  // Mostrar todas las citas en la consola
        return allQuotes;  // Devolver todas las citas

    } catch (error) {
        console.error('Error al raspar las citas: ', error);
        return null;
    }
};

module.exports = {
    scrapeWebsite,
};
