const moment = require("moment")

//console.log(moment().format('DD/MM/YYYY h:m:ss'))

const inicio = moment('09:10','HH:mm')
const termino = moment('12:50','HH:mm')
const now = moment().format('HH:mm')
console.log('agora: '+now,'termino: '+ termino)
console.log(moment(now,'HH:mm').isBetween(inicio,termino))

