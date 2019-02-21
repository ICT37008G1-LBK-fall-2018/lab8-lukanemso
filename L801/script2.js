let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        let minutes = getTime().minutes;
        if(minutes%2== 0) {
            resolve(minutes);
        }
        else {
            reject("arakoreqtuli dro");
        }
    }, 1000);
}
);

function getTime() {
    let d = new Date();
    let time = d.getTime();
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    let hours = Math.floor(time / 3600);
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours
    };
}



promise.then(data=>{
    alert(data);
    
}).catch(error=>{
    alert(error);
});
