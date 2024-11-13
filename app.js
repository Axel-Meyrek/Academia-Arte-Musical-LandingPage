//VARIABLES Y COMPONENTE
const $navFlotante = document.querySelector('#navFlotante');

const $buttonMenu = document.querySelector('#buttonMenu');

const $convenioTEB = document.querySelector('#convenioTEB');

const $convenioMAP = document.querySelector('#convenioMAP');

const $buttonConvenioMAP = document.querySelector('#buttonConvenioMAP');

const $buttonConvenioTEB = document.querySelector('#buttonConvenioTEB');

const $buttonFormulario = document.querySelector('#buttonFormulario');

const $nombreCompleto = document.querySelector('#nombreCompleto');

const $cursoInteresado = document.querySelector('#cursoInteresado');

const $correoElectronico = document.querySelector('#correoElectronico');

const $numeroCelular = document.querySelector('#numeroCelular');

const $estadoLocalidad = document.querySelector('#estadoLocalidad');


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

const cleanInputs = () => {
    $nombreCompleto.value = '';
    $cursoInteresado.value = '';
    $correoElectronico.value = '';
    $numeroCelular.value = '';
    $estadoLocalidad.value = '';
}

const renderLoader = () => {
    const $loader = /* html */
        `<div id="containerLoader" class="containerLoader">
            <span class="loader"></span>
        </div>`
    const $form = document.querySelector('#form');
    $form.innerHTML += $loader;    
}

const removeLoader = () => {
    document.querySelector('#containerLoader').remove();
}

const renderExitMessage = () => {
    const $message = /* html */
        `<div id="alertForm" class="alertForm">
            <p>Tus datos se enviaron correctamente ✅</p>
            <p>¡¡Nosotros nos pondremos en contacto contigo por correo electronico!!</p>
        </div> `;
    const $form = document.querySelector('#form');
    $form.innerHTML += $message;   
    
}

const saveCliente = async e => {

    e.preventDefault();

    if($nombreCompleto.value == '' ||
        $cursoInteresado.value == '' ||
        $correoElectronico.value == '' ||
        $numeroCelular.value == '' ||
        $estadoLocalidad.value == ''
    ){
        return;
    }

    e.target.remove();
    renderLoader();

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzdnicOKzyizyLPjeBn4slo8dIEY5lLqzrADKRTOb2bCg9oE8iIws_rmMms0sLyUoa2Nw/exec', {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
                "nombreCompleto": $nombreCompleto.value,
                "cursoInteresado": $cursoInteresado.value,
                "correoElectronico": $correoElectronico.value,
                "numeroCelular": $numeroCelular.value,
                "estadoLocalidad": $estadoLocalidad.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.error('Error:', error);
    }

    removeLoader();
    renderExitMessage();

    cleanInputs();
}

const removeButtonFormulario = () => {
    $buttonFormulario.remove();
}


//EVENTOS
$buttonMenu.addEventListener('click', showMenu);

$buttonConvenioMAP.addEventListener('click', showConvenioMAP);

$buttonConvenioTEB.addEventListener('click', showConvenioTEB);

$buttonFormulario.addEventListener('click', saveCliente);