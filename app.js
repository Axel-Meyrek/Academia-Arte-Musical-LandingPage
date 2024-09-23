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

const saveUser = (e) => {
    e.preventDefault();

    if($nombreCompleto.value == '' ||
        $cursoInteresado.value == '' ||
        $correoElectronico.value == '' ||
        $numeroCelular.value == '' ||
        $estadoLocalidad.value == ''
    ){
        return;
    }


    fetch("https://sheet.best/api/sheets/93d24933-8e35-497e-9b6f-4ed9c8570123", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "NOMBRE_COMPLETO": $nombreCompleto.value,
            "CURSO_INTERESADO": $cursoInteresado.value,
            "CORREO_ELECTRONICO": $correoElectronico.value,
            "NUMERO_CELULAR": $numeroCelular.value,
            "ESTADO_LOCALIDAD": $estadoLocalidad.value
        }),
    })

    cleanInputs();
}

const cleanInputs = () => {
    $nombreCompleto.value = '';
    $cursoInteresado.value = '';
    $correoElectronico.value = '';
    $numeroCelular.value = '';
    $estadoLocalidad.value = '';
}



//EVENTOS
$buttonMenu.addEventListener('click', showMenu);

$buttonConvenioMAP.addEventListener('click', showConvenioMAP);

$buttonConvenioTEB.addEventListener('click', showConvenioTEB);

$buttonFormulario.addEventListener('click', saveUser);