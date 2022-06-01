const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://www.jamesqquick.com/talks')
      .then( (res) => {
         const $ = cheerio.load(res.data)

         // const talks = {};

         // const title = $('.card .card--title').html()
         // const description = $('.card .card--description').html()
         // const date = $('.card .card--date small').html()

         const arr = []

         // console.table(arr)

         $('.card--title').each((index, element) => {
            arr.push(($(element).text()))
         })
         console.table(arr)
         
      })