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
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "ERROR!";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});