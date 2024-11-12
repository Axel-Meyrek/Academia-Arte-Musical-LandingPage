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
        console.log('Los datos se enviaron correctamente');

    } catch (error) {
        console.error('Error:', error);
        console.log('Ocurrió un error al enviar los datos.');
    }

    cleanInputs();
    showAlertForm();
}

const removeButtonFormulario = () => {
    $buttonFormulario.remove();
}

const showAlertForm = () => {
    const $alertForm =  document.querySelector('#alertForm')
    $buttonFormulario.remove();
    $alertForm.style.visibility = 'visible';
}


//EVENTOS
$buttonMenu.addEventListener('click', showMenu);

$buttonConvenioMAP.addEventListener('click', showConvenioMAP);

$buttonConvenioTEB.addEventListener('click', showConvenioTEB);

$buttonFormulario.addEventListener('click', saveCliente);