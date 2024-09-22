//VARIABLES Y COMPONENTE
const $navFlotante = document.querySelector('#navFlotante');

const $buttonMenu = document.querySelector('#buttonMenu');

const $convenioTEB = document.querySelector('#convenioTEB');

const $convenioMAP = document.querySelector('#convenioMAP');

const $buttonConvenioMAP = document.querySelector('#buttonConvenioMAP');

const $buttonConvenioTEB = document.querySelector('#buttonConvenioTEB');



//FUNCIONES
const showMenu = () => {
    $navFlotante.classList.toggle('showMenu');
}

const showConvenioTEB = () => {
    $convenioTEB.classList.add('showConvenio');
}

const showConvenioMAP = () => {
    $convenioMAP.classList.add('showConvenio');
}

const closeConvenio = () => {
    $convenioMAP.classList.remove('showConvenio');
    
    $convenioTEB.classList.remove('showConvenio');
}



//EVENTOS
$buttonMenu.addEventListener('click', showMenu);

$buttonConvenioMAP.addEventListener('click', showConvenioMAP);

$buttonConvenioTEB.addEventListener('click', showConvenioTEB);