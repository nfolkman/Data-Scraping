const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.dailyclimate.org/originals/')
      .then( (res) => {
         const $ = cheerio.load(res.data)

         // const talks = {};

         // const title = $('.card .card--title').html()
         // const description = $('.card .card--description').html()
         // const date = $('.card .card--date small').html()

         const arr = []
         const arr2= []

         // console.table(arr)

         // $('.page-article .body').each((index, element) => {
         //    arr.push(($(element).text()))
         // })
         // const title = $('article .widget__headline-text').html()
         // const description = $('.body .body-description p').html()


         $('article .widget__headline-text').each((index,el)=> {
            arr.push(($(el).text().trim()))
         })                                       // Proud of this!

         $('.body-description p').each((index, el) => {
            arr2.push(($(el).text().trim()))
         })

         console.table(arr)
         
         console.log(arr2)
         // console.log(description)
         
      })