const pantalla = document.querySelector(".pantalla"); /*el primero de la clase*/
const botones = document.querySelectorAll('.btn');  /* todos de la clase*/

botones.forEach(boton => {   /*para cada btn se ejecuta func distinta */
    boton.addEventListener('click', () => {

        const botonApretado = boton.textContent;  /* guarda el valor del btn apretado */
        
        if(boton.id === 'c') {
            pantalla.textContent = "0";
            return;
        }

        if(boton.id === "borrar") { /* si hay un nro y presionamos borrar mostrara 0 */
            if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
                pantalla.textContent === "0"; 
            } else { /*sino borra el ultimo nro */
                pantalla.textContent = pantalla.textContent.slice( 0, -1);
            }
            return;
        }

        if(boton.id === "igual") {
            try{
                pantalla.textContent = eval(pantalla.textContent); /* muestra evaluacion del contendo de la pantalla */
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }

        if(pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
            pantalla.textContent = botonApretado;
        } else{
            pantalla.textContent += botonApretado;
        }
 



       
    })

})