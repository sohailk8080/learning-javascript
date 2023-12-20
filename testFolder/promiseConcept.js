const myPromise = new Promise((resolve, reject) => {

setTimeout(() => {
    const randomNum = Math.random();
    if(randomNum > 0.5){
        return resolve(randomNum);
    }
    else{
        return reject(new Error("Does not fulfil"));
    }


}, 3000);
});

myPromise
.then(result =>{
    console.log("It got fulfiled", result);
})
.catch(error =>{
    console.log("It got rejected", error);
}
);