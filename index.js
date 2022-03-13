var time = document.getElementById("time");

const date = new Date();
const request_hours = date.getHours();
const request_minutes = date.getMinutes();

if (request_minutes < 10) {
    time.innerHTML = `${request_hours}:0${request_minutes}`;
}

else {
    time.innerHTML = `${request_hours}:${request_minutes}`;
}


function Replace($btn=document.getElementById('replace-help')) {
    $btn.addEventListener('click', ()=> {
        window.location.replace("https://github.com/Luan16p");

    }) 
}

const server = {
    status_server: "F", // O [ On ] / F [ Off ]
}

const { status_server } = server;

if (status_server == "O") {
    Replace();
}

else if (status_server == "F") {
    alert("Manutenção")
}