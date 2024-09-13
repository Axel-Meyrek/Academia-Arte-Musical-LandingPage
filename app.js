//VARIABLES Y COMPONENTE
const $navFlotante = document.querySelector('#navFlotante');

const $buttonMenu = document.querySelector('#buttonMenu');



//FUNCIONES
const showMenu = () => {
    $navFlotante.classList.toggle('showMenu');
}



//EVENTOS
$buttonMenu.addEventListener('click', showMenu);