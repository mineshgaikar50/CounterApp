let count = 0;

const counterSpan = document.getElementById("counter");
const errorDiv = document.getElementById("error");


function increment(){
    count++;
    updateCounter();   
   
}


function decrement(){
    if (count > 0) {
        count--;
        errorDiv.style.display = "none"; 
    } else {
        errorDiv.style.display = "block"; 
    }
    updateCounter(); 
   
    
}


function clearall(){
    count = 0;
    errorDiv.style.display = "none"; // Hide error on reset
    updateCounter();
}


function updateCounter() {
    counterSpan.textContent = count;
}