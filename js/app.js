//Variables
const resultado = document.querySelector('#resultado');

//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
})


// Funciones
function mostrarAutos(){
    autos.forEach( auto => {
        const { marca, modelo, año, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${año} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        //insertar en el html
        resultado.appendChild(autoHTML);
    });
}