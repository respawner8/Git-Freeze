const request = require('request');
const cheerio = require('cheerio');


request('https://www.flipkart.com/search?q=redmi&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', (error,response, html)=>{
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);

        const productName = $('._2cLu-l');

        // console.log(productName.text());

        $('._3liAhj').each((i, el)=>{
            const item = $(el)
            .find('._2cLu-l')
            .text();

            console.log(item);
        });
    }
});