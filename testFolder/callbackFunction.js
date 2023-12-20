//basic call back function

function greet(name, callback){

    console.log("This prints my name i.e. "+name);
    callback();
}

function welcome(){
    console.log("This is a callback function");
}

greet("Sohail", welcome);

console.log("------------------------------");

//Async callback
function greetAsync(name, callback){

    setTimeout(function()
        {
        console.log("Hi i am Async call");
        callback("Please call me back i am Async");
        }, 5000);

    
}

function welcomeAsync(mesg){
    console.log(mesg);
}

greetAsync("SohailAsync", welcomeAsync);
