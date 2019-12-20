const request = require('request');
const cheerio = require('cheerio');


request('https://www.gadgetsnow.com/compare-mobile-phones/Apple-iPhone-11-Pro-vs-OnePlus-7T', (error,response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        // const productName = $('._2cLu-l');

        // console.log(productName.text());

        $('.inr_tbl').each((i, el)=>{
            const item = $(el)
            .find('.ul2')
            .text();

            console.log(item);
        });
    }
});