function chaining(value, delay){
    return new Promise((resolve, reject) => {
        if(value % 2 === 0){
            resolve(value);
        }
        else{
            reject(new Error("Not an Even no"));
        }
    }, delay);
}

chaining(4,1000)
    .then(result => {
        console.log("Step 1 is an Even no", result);
        return chaining(6, 2000);
    })
    .then(result => {
        console.log("Step 2 is an even no?", result);
    })
    .catch(error => {
        console.error("promise chain error", error.message);
    });