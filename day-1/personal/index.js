let a = 'amin'
a = 'aminuddin'

const b = 'shah'

const fullname = `His name is ${a} ${b}`
console.log(fullname)

const array1 = [
    "👻","☠️","🤖","🤠","💀","👽","👾","🤖",
    "⚽","⚾","🏀","🥎","🎳","🎮","🎃","🎃"
]
// console.log(array1.length) = 16
for(let i = 0; i < array1.length; i+=1){
    console.log(i);
    console.log(array1[i]);
    // console.log(`index of array1 ${array1[i]} is ${i}`)
}

const firstname = "aminuddin"
const lastname = "masurom"
const fullname2 = `my name is ${firstname} ${lastname}`
console.log(fullname2)

const masa = new Date()
const hari = masa.getDay()
const minit = masa.getMinutes()
const seconds = masa.getSeconds()
const jam = masa.getHours()
const bulan = masa.getMonth()
console.log(masa)
console.log(`${hari} hari`)
console.log(minit, "mins")
console.log(seconds, "saat")
console.log(jam, "jam")
console.log(bulan + 1, "bulan")