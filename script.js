'use strict'

let text1 = 'JavaScript — это язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается.'
console.log(text1)
let textscr = text1.search('который')
let textscr2 = text1.search('языка')
console.log(textscr)
console.log(textscr2)
let text1new = text1.slice(40,191)
console.log(text1new)