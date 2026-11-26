<<<<<<< HEAD
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll('.btn');
const botonesTema = document.querySelectorAll('.btn-tema');

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    botonesTema.forEach(btn => {
        btn.classList.toggle('activo', btn.getAttribute('data-tema') === tema);
    });
}

// Cargar tema guardado o usar 'azul' por defecto
const temaGuardado = localStorage.getItem('temaCalculadora') || 'azul';
aplicarTema(temaGuardado);

// Cambiar tema y animar el círculo al hacer clic
botonesTema.forEach(boton => {
    boton.addEventListener('click', () => {
        const tema = boton.getAttribute('data-tema');
        aplicarTema(tema);
        localStorage.setItem('temaCalculadora', tema);

        boton.classList.remove('animar-clic');
        void boton.offsetWidth;
        boton.classList.add('animar-clic');
    });
});

// Lógica de la calculadora
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') {
=======
const pantalla = document.querySelector(".pantalla"); /*el primero de la clase*/
const botones = document.querySelectorAll('.btn');  /* todos de la clase*/

botones.forEach(boton => {   /*para cada btn se ejecuta func distinta */
    boton.addEventListener('click', () => {

        const botonApretado = boton.textContent;  /* guarda el valor del btn apretado */
        
        if(boton.id === 'c') {
>>>>>>> f6a9e3032177c623f07723368a67a8d328113250
            pantalla.textContent = "0";
            return;
        }

<<<<<<< HEAD
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
=======
        if(boton.id === "borrar") { /* si hay un nro y presionamos borrar mostrara 0 */
            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
                pantalla.textContent === "0"; 
            } else { /*sino borra el ultimo nro */
                pantalla.textContent = pantalla.textContent.slice( 0, -1);
>>>>>>> f6a9e3032177c623f07723368a67a8d328113250
            }
            return;
        }

<<<<<<< HEAD
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
=======
        if(boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent); /* muestra evaluacion del contendo de la pantalla */
>>>>>>> f6a9e3032177c623f07723368a67a8d328113250
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }

<<<<<<< HEAD
        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
=======
        if(pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
 



       
    })

})
>>>>>>> f6a9e3032177c623f07723368a67a8d328113250
