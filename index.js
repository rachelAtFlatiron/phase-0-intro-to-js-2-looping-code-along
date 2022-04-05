// Code your solutions in this file
let countDown = (n) => {
    for(let i = n; i >= 0; i--){
        console.log(i);
    }
}

let writeCards = (arr) => {
    let newCards = [];
    for(let i = 0; i < arr.length; i++){
        newCards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`)
    }
    return newCards
}