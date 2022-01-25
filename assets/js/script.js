let n = 21;

function myOdd() {

    if (n % 3 == 0 && n % 7 == 0) {
        console.log("Divisible");
    }
    else{
        console.log("Not divisible");
    }
}

myOdd();