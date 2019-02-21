let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        //
        resolve(getTime().seconds);
    }, 1000);

}
);

let promise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        //
        resolve(getTime().minutes);
    }, 2000);

}
);


let promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        //
        resolve(getTime().hours);
    }, 2000);

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
Promise.all([promise, promise2, promise3]).then(data => {
    sum = data[0] + data[1] + data[2];
    alert(sum);
}
);


