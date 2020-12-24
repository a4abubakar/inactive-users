const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    if(user.lastActivity <=2){
        inactiveFirstStage()
    }
    else if(user.lastActivity >2 && user.lastActivity<=4){
        inactiveSecondStage()
    }
     if(user.lastActivity >4 && user.lastActivity<=6){
        inactiveThirdStage()
    }
}, 1000);
