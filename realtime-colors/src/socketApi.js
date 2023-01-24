import io from "socket.io-client";

let socket;

//Sunucu bağlantısı

export const init = () => {
    console.log("Sunucuya bağlanılıyor.")

    socket = io("http://localhost:3001",{
        transports:["websocket"],
    });

    socket.on('connect', () =>{
        console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
    })
}

// Seçilen rengi backende gönderme

export const send = (color) =>{
    socket.emit("newColor", color)
}

//Kanala abone olma işlemi

export const subscribe = (cb) => {
    socket.on("receive", (color) => {
        console.log(color)
    cb(color); //callback ile setActiveColor ilişkisi App.js den
    });
}

