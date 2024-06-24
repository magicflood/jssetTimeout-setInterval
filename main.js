let uzbData = new Date();
let watch = uzbData.getHours();
let minut = uzbData.getMinutes();
let data = uzbData.getDate();
let sec = uzbData.getSeconds();
let texthour = document.getElementById("hour");
let textmin = document.getElementById("min");
let textsec = document.getElementById("sec");
let textdata = document.getElementById("data");

textdata.innerHTML = data;
texthour.innerHTML = watch;
textmin.innerHTML = minut;
textsec.innerHTML = sec;
textdata.innerHTML = `${uzbData.getDate()}, ${uzbData.getFullYear()}`
