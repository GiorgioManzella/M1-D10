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

        let max = Math.max(...onehundred)
        let min = Math.min(...onehundred)
        let result = { max, min}
        return result
    }

    console.log(maxValues(onehundred))

    // 1 create the array
    //2 create 2 array
    // loop each array until it has 10 random numbers


    let randomNumberList = [[],[]]
    for (i=0, i<=10; i++;){
        let numbers = (Math.floor(Math.random)*10)
        randomNumberList[0].push(numbers)
        randomNumberList[1].push(numbers)
    }
    console.log(randomNumberList)                   //????????????????




    let a = [1,2,3,4,5]
    let b = [1,2,3,4,5,6]
    let longest = function(a,b){
        if (a<b)                                    // how to find the lenght of arrays
        return a;
        else 
        return b
    }   

    console.log(longest())
    
        
    let container = document.getElementById('container')
    let td = document.getElementsByTagName('th')


    
let print1 = function print1(){
    for (i=0; i<td.length; i++){
        console.log(td[i])
        

    }}



     let change1 = function change1(){
        
        document.getElementById('h1').innerText = '1'
        
     }

let addRow = function (){
    let newTH = document.createElement('th')
    let parent = document.getElementsByTagName('tr')
    parent.appendChild(newTH)
    
}


let nexClass = function(){
    let x  = document.getElementsByClassName('tr')
    
}