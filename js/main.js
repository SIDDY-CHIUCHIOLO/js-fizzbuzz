
let unDiv = document.querySelector("div");
console.log("INIZIO")

for (let i = 1; i < 101; i++){
    let nuovoDiv = document.createElement("div");
    nuovoDiv.classList.add("bg-primary", "p-3");

    if((i % 3 == 0) && (i % 5 == 0)) {
        nuovoDiv.innerHTML = "FizzBuzz";
        console.log("FizzBuzz")                    
    } else if(i % 3 == 0){
        nuovoDiv.innerHTML = "Fizz";
        console.log("Fizz")                    
    } else if(i % 5 == 0) {
        nuovoDiv.innerHTML = "Buzz";
        console.log("Buzz")                    
    } else {
        nuovoDiv.innerHTML = i;
        console.log(i)
    }

    unDiv.append(nuovoDiv);
}

console.log("FINE")