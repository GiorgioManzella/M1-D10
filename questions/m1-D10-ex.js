let x = 'jhon'
let y = ' doe '
console.log (x + y)


let newObj = {

    name: 'giorgio',
    surname: 'manzella',
    email:'Giorgio@hotmail.com',
}


delete newObj.email
    
    console.log(newObj)

    let tenStrings = ['','','','','','','','','','']

    console.log(tenStrings)


    let onehundred = []

    for (let index = 0; index <= 100; index++) {
        onehundred.push(index)
        
    }

    console.log(onehundred)

    let maxValues  = function() {

        let max = Math.max(onehundred)
        let min = Math.min(onehundred)
        let result =  max + min
        return result
    }

    console.log(maxValues(onehundred))