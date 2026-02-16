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
    const el = document.getElementById('btn-saludo');
    el.addEventListener('click',()=>{
       const al = document.getElementById('log');
       al.textContent = "Botón presionado" ;
    });
    
});


