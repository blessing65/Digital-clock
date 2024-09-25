const hourid = document.getElementById("hour");
const minid = document.getElementById("minutes");
const secid = document.getElementById("seconds");
const ampmid = document.getElementById("ampm");


function clockFunction(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }

    hourid.innerText = h;
    minid.innerText = m;
    secid.innerText = s;
    ampmid.innerText = ampm

    setTimeout(()=> {
        clockFunction()
    }, 1000)
}

clockFunction()