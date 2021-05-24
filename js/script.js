const countdownDate = new Date("June 30, 2021 23:59:59").getTime();
const timer = setInterval(function(){
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / (1000));

    document.getElementById("day").innerHTML = `<span>${day}</span> days`;
    document.getElementById("hour").innerHTML = `<span>${hour}</span> hours`;
    document.getElementById("minute").innerHTML = `<span>${minute}</span> minutes <span>remaining</span>`;
    /* document.getElementById("second").innerHTML = `<span>0${second}</span> days`; */
});