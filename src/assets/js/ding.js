document.addEventListener('DOMContentLoaded', () => {
    app()
})



const typed = new Typed('.typed', {
    // strings: ['Marketing', 'Aplicaciones', 'SEO', 'Páginas Webs', 'Desarrollo'],
    stringsElement: '#cadenas-texto', // id del elemento que contiene cadenas de texto a mostrar,
    typeSpeed: 35, 
    startDelay: 300, //Tiempo de retraso en iniciar la animación,
    backSpeed: 20, //velocidad de borrado de letra,
    smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de textom
    shuffle: false, // alterar el orden en el que se escribe cada palabra
    backDelay: 700, // Tiempo de espera despues de que termina de escribir una palabra,
    loop: true,
    loopCount: false, //Cantidad de veces a repetir el array. false = infinite
    showCursos: true,
    cursorChar: '|',
    contentType: 'html' // "html" o null para texto sin formato
})
