//conectar a un brocker mqtt
const client = mqtt.connect("wss://9c5b62f9383143779c1c998df33d398c.s1.eu.hivemq.cloud:8883/mqtt",{
    clientId: "web_" + Math.random().toString(16).slice(2, 10),
    username: "marcoAlfoonso",
    password: "Lic72@S2",
    clean: true
});

//muestra en la consola que la conexión fue correcta
client.on("connect", () => {
  console.log("Conectado con autenticación");
});

//muestra el error en la consola
client.on("error", (err) => {
  console.error("Error:", err);
});

//se crea una constante log que tendrá como parámetro msg
const log = msg => {
    //el, contendrá el elemento que esté en log del html
    const el = document.getElementById('log');
    // se creará un parrafo p en el html
    const p = document.createElement('p');
    //el parrafo p, contendrá el parámetro msg
    p.textContent = msg;
    //se agragrá dinámicamente p dentro del div del html y por debajo del p anterior
    el.appendChild(p);
};

//se asegurará de que se cargue la página correctamente antes de que se ejecute alguna acción
document.addEventListener('DOMContentLoaded',()=>{
    //se identifica el elemento botón del html
    const el = document.getElementById('btn-saludo');
    //cuando suceda el evento 'click' se llamará a log
    el.addEventListener('click',()=>{
       const al = document.getElementById('log');
       al.textContent = "Hola." ;
    });

    //se identifica el botón que prende
    const ledon = document.getElementById('btn-ledon');
    //cuando suceda el evento click del botón led
    ledon.addEventListener('click',()=>{
        client.publish("casa/luz","ON");
    });

    const ledoff = document.getElementById('btn-ledoff');

    ledoff.addEventListener('click',()=>{
        client.publish("casa/luz","OFF");
    });
    
});


